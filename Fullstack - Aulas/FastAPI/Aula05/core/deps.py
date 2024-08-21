# dependencia = tudo que vc depende (ex: sessions - conexão ao banco)
# injeção de dependencias = organizar os parametros que serão usados na função

# função para retornar o mesmo valor, de onde parar --->>> Generator
from typing import Generator
from sqlalchemy.ext.asyncio import AsyncSession
from core.database import Session

async def getSession():
    # criou um objeto da classe
    session: AsyncSession = Session()
    try:
        yield session
    finally: 
        session.close()