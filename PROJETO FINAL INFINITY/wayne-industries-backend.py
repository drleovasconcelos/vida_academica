# main.py
from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jose import JWTError, jwt
from passlib.context import CryptContext
from pydantic import BaseModel
from datetime import datetime, timedelta
from typing import List, Optional
import mysql.connector
from mysql.connector import Error

app = FastAPI()

# Configurações
SECRET_KEY = "sua_chave_secreta_aqui"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30
REFRESH_TOKEN_EXPIRE_DAYS = 7

# Configuração do banco de dados
DB_CONFIG = {
    'host': 'localhost',
    'user': 'seu_usuario',
    'password': 'sua_senha',
    'database': 'wayne_industries'
}

# Modelos
class User(BaseModel):
    username: str
    email: Optional[str] = None
    full_name: Optional[str] = None
    role: str

class Token(BaseModel):
    access_token: str
    refresh_token: str
    token_type: str

class TokenData(BaseModel):
    username: Optional[str] = None

class InventoryItem(BaseModel):
    id: Optional[int] = None
    name: str
    quantity: int
    status: str

class DashboardData(BaseModel):
    security_alerts: int
    active_users: int
    inventory_status: str
    resources: List[InventoryItem]
    recent_activities: List[str]

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

# Funções auxiliares
def create_db_connection():
    try:
        connection = mysql.connector.connect(**DB_CONFIG)
        return connection
    except Error as e:
        print(f"Erro ao conectar ao MySQL: {e}")
        return None

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    return pwd_context.hash(password)

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

def create_refresh_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(days=REFRESH_TOKEN_EXPIRE_DAYS)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

async def get_current_user(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Não foi possível validar as credenciais",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
        token_data = TokenData(username=username)
    except JWTError:
        raise credentials_exception
    user = get_user(username=token_data.username)
    if user is None:
        raise credentials_exception
    return user

def get_user(username: str):
    connection = create_db_connection()
    if connection is None:
        return None
    try:
        cursor = connection.cursor(dictionary=True)
        cursor.execute("SELECT * FROM users WHERE username = %s", (username,))
        user_data = cursor.fetchone()
        if user_data:
            return User(**user_data)
    finally:
        cursor.close()
        connection.close()
    return None

# Rotas
@app.post("/api/login", response_model=Token)
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    user = get_user(form_data.username)
    if not user or not verify_password(form_data.password, user.password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Credenciais inválidas",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    refresh_token = create_refresh_token(data={"sub": user.username})
    return {"access_token": access_token, "refresh_token": refresh_token, "token_type": "bearer"}

@app.get("/api/users/me", response_model=User)
async def read_users_me(current_user: User = Depends(get_current_user)):
    return current_user

@app.get("/api/dashboard", response_model=DashboardData)
async def get_dashboard_data(current_user: User = Depends(get_current_user)):
    # Aqui você deve implementar a lógica para buscar dados reais do banco de dados
    # Este é apenas um exemplo com dados mockados
    return DashboardData(
        security_alerts=5,
        active_users=120,
        inventory_status="OK",
        resources=[
            InventoryItem(id=1, name="Batmobile", quantity=1, status="Active"),
            InventoryItem(id=2, name="Batsuit", quantity=3, status="Active"),
            InventoryItem(id=3, name="Batarang", quantity=50, status="Active"),
            InventoryItem(id=4, name="Grappling Hook", quantity=10, status="Active")
        ],
        recent_activities=[
            "Bruce Wayne acessou o sistema às 15:30",
            "Alfred Pennyworth atualizou o inventário às 14:45",
            "Lucius Fox adicionou um novo item ao inventário às 13:20"
        ]
    )

@app.get("/api/inventory", response_model=List[InventoryItem])
async def get_inventory(current_user: User = Depends(get_current_user)):
    connection = create_db_connection()
    if connection is None:
        raise HTTPException(status_code=500, detail="Erro de conexão com o banco de dados")
    try:
        cursor = connection.cursor(dictionary=True)
        cursor.execute("SELECT * FROM inventory")
        inventory_data = cursor.fetchall()
        return [InventoryItem(**item) for item in inventory_data]
    finally:
        cursor.close()
        connection.close()

@app.post("/api/inventory", response_model=InventoryItem)
async def create_inventory_item(item: InventoryItem, current_user: User = Depends(get_current_user)):
    if current_user.role not in ["manager", "admin"]:
        raise HTTPException(status_code=403, detail="Permissão negada")
    connection = create_db_connection()
    if connection is None:
        raise HTTPException(status_code=500, detail="Erro de conexão com o banco de dados")
    try:
        cursor = connection.cursor()
        cursor.execute(
            "INSERT INTO inventory (name, quantity, status) VALUES (%s, %s, %s)",
            (item.name, item.quantity, item.status)
        )
        connection.commit()
        item.id = cursor.lastrowid
        return item
    finally:
        cursor.close()
        connection.close()

@app.put("/api/inventory/{item_id}", response_model=InventoryItem)
async def update_inventory_item(item_id: int, item: InventoryItem, current_user: User = Depends(get_current_user)):
    if current_user.role not in ["manager", "admin"]:
        raise HTTPException(status_code=403, detail="Permissão negada")
    connection = create_db_connection()
    if connection is None:
        raise HTTPException(status_code=500, detail="Erro de conexão com o banco de dados")
    try:
        cursor = connection.cursor()
        cursor.execute(
            "UPDATE inventory SET name = %s, quantity = %s, status = %s WHERE id = %s",
            (item.name, item.quantity, item.status, item_id)
        )
        connection.commit()
        if cursor.rowcount == 0:
            raise HTTPException(status_code=404, detail="Item não encontrado")
        item.id = item_id
        return item
    finally:
        cursor.close()
        connection.close()

@app.delete("/api/inventory/{item_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_inventory_item(item_id: int, current_user: User = Depends(get_current_user)):
    if current_user.role != "admin":
        raise HTTPException(status_code=403, detail="Permissão negada")
    connection = create_db_connection()
    if connection is None:
        raise HTTPException(status_code=500, detail="Erro de conexão com o banco de dados")
    try:
        cursor = connection.cursor()
        cursor.execute("DELETE FROM inventory WHERE id = %s", (item_id,))
        connection.commit()
        if cursor.rowcount == 0:
            raise HTTPException(status_code=404, detail="Item não encontrado")
    finally:
        cursor.close()
        connection.close()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
