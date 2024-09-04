from fastapi import APIRouter
from api.v1.endpoints import aluno

apiRouter = APIRouter()
apiRouter.include_router(aluno.router, prefix='/alunos')