# tudo foi para a pasta API

# from fastapi import FastAPI, Depends, Response
# from models.aluno_model import AlunoModel
# from schemas.aluno_schema import AlunoSchema
# from core.deps import getSession
# from sqlalchemy.ext.asyncio import AsyncSession
# from typing import List
# from sqlalchemy.future import select
# # lançar erro caso der errado
# from fastapi import HTTPException, status


# app = FastAPI()


# @app.post('/alunos', response_model=AlunoSchema)
# async def createAluno(aluno: AlunoSchema, db: AsyncSession =
#                       Depends(getSession)):
#     novoAluno = AlunoModel(nome=aluno.nome,
#                            idade=aluno.idade,
#                            nota=aluno.nota,
#                            curso=aluno.curso)
#     db.add(novoAluno)
#     await db.commit()
#     return novoAluno


# @app.get('/alunos', response_model=List[AlunoSchema])
# async def getAlunos(db: AsyncSession = Depends(getSession)):
#     async with db as session:
#         # cria a query Select * from ...
#         query = select(AlunoModel)
#         # executa a query
#         result = await session.execute(query)
#         # converte os dados do resultado em uma lista
#         alunos: List = result.scalars().all()
#         return alunos
    
# @app.get('/alunos/{matricula}', response_model=AlunoSchema)
# async def getAlunoByMatricula(matricula: int, db: AsyncSession = Depends(getSession)):
#     print("teste",matricula)
#     # gerenciador de contexto
#     async with db as session:
#         query = select(AlunoModel).where(AlunoModel.matricula == matricula)
#         # executa a query
#         result = await session.execute(query)
#         # converte os dados do resultado em uma lista
#         aluno = result.scalar_one_or_none()
#         if aluno:
#             return aluno
        
#         raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail= 'Aluno não encontrado')

# # alterar
# @app.put('/alunos/{matricula}', response_model=AlunoSchema)
# async def updateAluno(matricula: int, aluno: AlunoSchema, db: AsyncSession = Depends(getSession)):
#     async with db as session:
#         query = select(AlunoModel).where(AlunoModel.matricula == matricula)
#         # executa a query
#         result = await session.execute(query)
#         # converte os dados do resultado em uma lista
#         alunoDB = result.scalar_one_or_none()
#         # se o aluno existir
#         if alunoDB:
#             alunoDB.nome=aluno.nome
#             alunoDB.idade=aluno.idade
#             alunoDB.curso=aluno.curso
#             alunoDB.nota=aluno.nota
#             await db.commit()
#             return alunoDB
#         raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail= 'Aluno não encontrado')
    
# @app.delete('/alunos/{matricula}')
# async def deleteAluno(matricula: int, db: AsyncSession = Depends(getSession)):
#     async with db as session:
#         query = select(AlunoModel).where(AlunoModel.matricula == matricula)
#         result = await session.execute(query)
#         aluno = result.scalar_one_or_none()
#         if aluno:
#             await session.delete(aluno)
#             await db.commit()
#             return Response(status_code=status.HTTP_200_OK)
#             # return {"response": "Aluno removido com sucesso"}
#         raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
#                             detail='Aluno não encontrado')

from fastapi import FastAPI
from core.configs import settings
from api.v1.api import apiRouter

app = FastAPI()
app.include_router(apiRouter, prefix=settings.API_V1_STR)

if __name__ == '__main__':
    import uvicorn
    uvicorn.run('main:app', host='0.0.0.0',
                reload=True, port=8000)

