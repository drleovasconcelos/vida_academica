

from fastapi import FastAPI, Depends
from models.aluno_model import AlunoModel
from schemas.aluno_schema import AlunoSchema
from core.deps import getSession
from sqlalchemy.ext.asyncio import AsyncSession
from typing import List
from sqlalchemy.future import select


app = FastAPI()


@app.post('/alunos', response_model=AlunoSchema)
async def createAluno(aluno: AlunoSchema, db: AsyncSession =
                      Depends(getSession)):
    novoAluno = AlunoModel(nome=aluno.nome,
                           idade=aluno.idade,
                           nota=aluno.nota)
    db.add(novoAluno)
    await db.commit()
    return novoAluno


@app.get('/alunos', response_model=List[AlunoSchema])
async def getAlunos(db: AsyncSession = Depends(getSession)):
    async with db as session:
        # cria a query Select * from ...
        query = select(AlunoModel)
        # executa a query
        result = await session.execute(query)
        # converte os dados do resultado em uma lista
        alunos: List = result.scalars().all()
        return alunos

if __name__ == '__main__':
    import uvicorn
    uvicorn.run('main:app', host='0.0.0.0',
                reload=True, port=8000)
