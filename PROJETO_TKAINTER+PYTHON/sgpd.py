import sqlite3 as conector
import os
os.system("cls|clear")

conexao = conector.connect("database.bd")
cursor = conexao.cursor()

cursor.execute("""CREATE TABLE IF NOT cadastro(nome text)""")

print("Conectado ao Bancod de Dados com Sucesso!")