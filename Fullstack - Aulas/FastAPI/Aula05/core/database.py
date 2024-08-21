# criar os comands select e etc...
# criando a conexão tb
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.asyncio import create_async_engine
from sqlalchemy.ext.asyncio import AsyncEngine
from sqlalchemy.ext.asyncio import AsyncSession
from core.configs import settings

# conexão criada de forma assincrona
engine: AsyncEngine = create_async_engine(settings.DB_URL)

# criou a classe
Session: AsyncSession = sessionmaker(
    autocommit=False,
    # serve para informar se teve alteração após consuklta -->> ele informa se está pendente
    autoflush=False,
    # a cada commit expira a sessão
    expire_on_commit=False,
    bind=engine,
    class_= AsyncSession
)