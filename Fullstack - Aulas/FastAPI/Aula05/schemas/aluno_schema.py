# ficarão os schemas para manipular na API
from typing import Optional
from pydantic import BaseModel as SCBaseModel

class AlunoSchema(SCBaseModel):
    matricula: Optional[int] = None
    nome = str
    idade = int
    curso = str
    nota = float
    aprovado = Optional[bool] = False
