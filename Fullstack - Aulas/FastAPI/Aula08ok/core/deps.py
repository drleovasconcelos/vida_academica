# injetar dependência - não precisar ficar repetindo
from typing import Generator
from sqlalchemy.ext.asyncio import AsyncSession
from core.database import Session

async def getSession():
    session: AsyncSession = Session()
    try:
        yield session
    finally:
        await session.close()
        
