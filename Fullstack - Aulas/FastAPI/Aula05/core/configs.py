# criar a conexão ao banco de dados - declarative base - url -  sessions
# começar instalando o -->>> pip install pydantic_settings
# esse arquivvo tb terá as configurações do arquivo(classe/atributo)

from pydantic_settings import BaseSettings
from sqlalchemy.ext.declarative import declarative_base
from typing import Type 

class Settings(BaseSettings):
    # url da api base --->>> v1 é a versão
    API_V1_STR: str = '/api/v1'
    # url do banco de dados - string de conexão
    DB_URL: str = 'mysql+asyncmy://root:@localhost:3306/escola'
    # tipagem dos comandos da classe base
    DBBaseModel: Type = declarative_base()

# diferenciar maiusculo de minusculo
    class config: 
        case_sensitive = True

settings = Settings()



    
