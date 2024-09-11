from core.configs import settings
from sqlalchemy import Column, Integer, String, Float, Boolean

class ProdutoModel(settings.DBBaseModel):
    __tablename__ = "produtos"
    codigo: int = Column(Integer, primary_key=True, autoincrement=True)
    nome: str = Column(String(150), nullable=False)
    preco: float = Column(Float)
    categoria: str = Column(String(100))
    disponível: bool = Column(Boolean, default=False)