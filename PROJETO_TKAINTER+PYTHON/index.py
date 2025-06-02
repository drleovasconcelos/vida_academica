from tkinter import *
from tkinter import ttk
from tkinter.ttk import *
from tkinter import Button
import sqlite3

root = Tk()

class Funcs():
    def limpar_tela(self):
        self.codigo_entry.delete(0, END)
        self.nome_entry.delete(0, END)
        self.simulado1_entry.delete(0, END)
        self.simulado2_entry.delete(0, END)
        self.AV_entry.delete(0, END)
        self.AVF_entry.delete(0, END)
        

    def conecta_bd(self):
        self.conexao = sqlite3.connect("notas.bd")
        self.cursor = self.conexao.cursor()

    def desconecta_bd(self):
        if self.conexao:
            self.conexao.close()
            print("Desconectado ao banco de dados!")
            self.conexao = None
            self.cursor = None

    def montaTabelas(self):
        self.conecta_bd()
        print("Conectado ao banco de dados!")

        ### Criar tabela alunos_notas
        self.cursor.execute("""
                            CREATE TABLE IF NOT EXISTS alunos_notas (
                                matricula INTEGER PRIMARY KEY,
                                nome CHAR(40) NOT NULL,
                                simulado_1 REAL,
                                simulado_2 REAL,
                                AV REAL,
                                AVF REAL,
                                nota_final REAL,
                                resultado TEXT
                            )
                        """)
        self.conexao.commit()
        print("Tabela alunos_notas criada!")

        self.desconecta_bd()

    def variaveis(self):
        self.codigo = self.codigo_entry.get()
        self.nome = self.nome_entry.get()
        self.simulado1 = self.simulado1_entry.get()
        self.simulado2 = self.simulado2_entry.get()
        self.AV = self.AV_entry.get()
        self.AVF = self.AVF_entry.get()
        
    ## ADICIONAR ALUNOS E NOTAS
    def add_alunos(self):
        self.variaveis()
        self.conecta_bd()
        try:
            resultado = self.calcular_resultado(self.simulado1, self.simulado2, self.AV, self.AVF)
            self.cursor.execute("""
                INSERT INTO alunos_notas (matricula, nome, simulado_1, simulado_2, AV, AVF, nota_final, resultado)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)""",
                (self.codigo, self.nome, self.simulado1, self.simulado2, self.AV, self.AVF, self.nota_final, resultado))
            self.conexao.commit()
            print(f"Aluno com matrícula {self.codigo} e suas notas adicionados com sucesso!")

        except sqlite3.IntegrityError as e:
            self.conexao.rollback()
            print(f"Erro ao adicionar aluno: {e}")
        except Exception as e:
            self.conexao.rollback()
            print(f"Erro inesperado ao adicionar aluno: {e}")
        finally:
            self.desconecta_bd()
            self.select_lista()
            self.limpar_tela()

    ## FUNÇÃO SELECT ALUNOS E NOTAS
    def select_lista(self):
        self.lista_notas.delete(*self.lista_notas.get_children())
        self.conecta_bd()
        lista = self.cursor.execute("""
            SELECT matricula, nome, simulado_1, simulado_2, AV, AVF, nota_final, resultado
            FROM alunos_notas
            ORDER BY matricula ASC, nome ASC
        """)
        for i in lista:
            self.lista_notas.insert("", END, values=i)
        self.desconecta_bd()
        
    # FUNÇÃO PARA SUBIR A INFORMAÇÃO AO DAR DOIS CLICKS
    def DuploClick(self, event):
        self.limpar_tela()
        self.lista_notas.selection() #seleciona as informações da lista
        for n in self.lista_notas.selection():
            col1, col2, col3, col4, col5, col6, col7, col8 = self.lista_notas.item(n, 'values')
            self.codigo_entry.insert(END, col1)
            self.nome_entry.insert(END, col2)
            self.simulado1_entry.insert(END, col3)
            self.simulado2_entry.insert(END, col4)
            self.AV_entry.insert(END, col5)
            self.AVF_entry.insert(END, col6)
        
    def deleta_aluno(self):
        self.variaveis()
        if self.codigo is not None:
            self.conecta_bd()
            self.cursor.execute("""DELETE FROM alunos_notas WHERE matricula = ?""", (self.codigo,))
            print("Matrícula excluída.")
            self.conexao.commit()
            self.desconecta_bd()
            self.limpar_tela()
            self.select_lista()
        else:
            print("Matrícula inválida ou não selecionada.")
    
    def alterar_aluno(self):
        self.variaveis()
        self.conecta_bd()
        resultado = self.calcular_resultado(self.simulado1, self.simulado2, self.AV, self.AVF)
        self.cursor.execute("""UPDATE alunos_notas SET nome = ?, simulado_1 = ?, simulado_2 = ?, AV = ?, AVF = ?, nota_final = ?, resultado = ? WHERE matricula = ?""",
            (self.nome, self.simulado1, self.simulado2, self.AV, self.AVF, self.nota_final, resultado, self.codigo))
        self.conexao.commit()
        self.desconecta_bd()
        self.select_lista()
        self.limpar_tela()
    
    def busca_aluno(self):
        self.conecta_bd()
        nome = self.nome_entry.get()
        if not nome.strip():
            print("Por favor, insira um nome para buscar.")
            self.desconecta_bd()
            return
        nome_pesquisa = f"%{nome.strip()}%"
        self.lista_notas.delete(*self.lista_notas.get_children())
        self.cursor.execute("""
            SELECT matricula, nome, simulado_1, simulado_2, AV, AVF FROM alunos_notas WHERE nome LIKE ? ORDER BY matricula ASC""", (nome_pesquisa,))
        resultados = self.cursor.fetchall()
        if resultados:
            for i in resultados:
                self.lista_notas.insert("", END, values=i)
            print(f"{len(resultados)} aluno(s) encontrados.")
        else:
            print("Nenhum aluno encontrado com esse nome.")

        self.desconecta_bd()
       
    def calcular_resultado(self, sim1, sim2, av, avf):
        try:
            sim1 = float(sim1)
            sim2 = float(sim2)
            av = float(av)
            avf = float(avf)

            media_parcial1 = sim1 + sim2 + av
            media_parcial2 = sim1 + sim2 + avf

            self.nota_final = max(media_parcial1, media_parcial2)

            if self.nota_final >= 6:
                return "Aprovado"
            else:
                return "Reprovado"
        except Exception as e:
            self.nota_final = 0
            return f"Erro: {e}"
        
class Application(Funcs):
    def __init__(self):
        self.root = root
        self.tela()
        self.frame_da_tela()
        self.widgets_frame1()
        self.lista_frame2()
        self.montaTabelas()
        self.select_lista()
        root.mainloop()

    def tela(self):
        self.root.title("Cadastro de Notas")
        self.root.configure(background='#1e3743')
        self.root.geometry("800x600")
        self.root.resizable(True, True)
        self.root.maxsize(width=900, height=700)
        self.root.minsize(width=500, height=300)

    def frame_da_tela(self):
        self.frame_1 = Frame(self.root)
        self.frame_1.place(relx=0.02, rely=0.02, relwidth=0.96, relheight=0.46)
        self.frame_2 = Frame(self.root)
        self.frame_2.place(relx=0.02, rely=0.5, relwidth=0.96, relheight=0.46)

    def widgets_frame1(self):
        # Botões
        self.bt_limpar = Button(self.frame_1, text="Limpar", bd=2, bg='#107db2', fg='white', font=('verdana', 8, 'bold'), command = self.limpar_tela)
        self.bt_limpar.place(relx=0.3, rely=0.1, relwidth=0.1, relheight=0.15)

        self.bt_buscar = Button(self.frame_1, text="Buscar", bd=2, bg='#107db2', fg='white', font=('verdana', 8, 'bold'), command= self.busca_aluno)
        self.bt_buscar.place(relx=0.4, rely=0.1, relwidth=0.1, relheight=0.15)

        self.bt_novo = Button(self.frame_1, text="Novo", bd=2, bg='#107db2', fg='white', font=('verdana', 8, 'bold'), command = self.add_alunos)
        self.bt_novo.place(relx=0.6, rely=0.1, relwidth=0.1, relheight=0.15)

        self.bt_alterar = Button(self.frame_1, text="Alterar", bd=2, bg='#107db2', fg='white', font=('verdana', 8, 'bold'), command=self.alterar_aluno)
        self.bt_alterar.place(relx=0.7, rely=0.1, relwidth=0.1, relheight=0.15)

        self.bt_apagar = Button(self.frame_1, text="Apagar", bd=2, bg='#107db2', fg='white', font=('verdana', 8, 'bold'), command=self.deleta_aluno)
        self.bt_apagar.place(relx=0.8, rely=0.1, relwidth=0.1, relheight=0.15)

        # Campos e Labels
        # Código
        self.lb_codigo = Label(self.frame_1, text="Matrícula")
        self.lb_codigo.place(relx=0.05, rely=0.05)

        self.codigo_entry = Entry(self.frame_1)
        self.codigo_entry.place(relx=0.05, rely=0.15, relwidth=0.15)

        # Nome
        self.lb_nome = Label(self.frame_1, text="Nome")
        self.lb_nome.place(relx=0.05, rely=0.35)

        self.nome_entry = Entry(self.frame_1)
        self.nome_entry.place(relx=0.05, rely=0.45, relwidth=0.8)

        # Simulado 1
        self.lb_simulado1 = Label(self.frame_1, text="Simulado 1")
        self.lb_simulado1.place(relx=0.05, rely=0.6)

        self.simulado1_entry = Entry(self.frame_1)
        self.simulado1_entry.place(relx=0.05, rely=0.7, relwidth=0.1)

        # Simulado 2
        self.lb_simulado2= Label(self.frame_1, text="Simulado 2")
        self.lb_simulado2.place(relx=0.2, rely=0.6)

        self.simulado2_entry = Entry(self.frame_1)
        self.simulado2_entry.place(relx=0.2, rely=0.7, relwidth=0.1)

        # Avaliação Semestral
        self.lb_AV = Label(self.frame_1, text="AV")
        self.lb_AV.place(relx=0.4, rely=0.6)

        self.AV_entry = Entry(self.frame_1)
        self.AV_entry.place(relx=0.4, rely=0.7, relwidth=0.1)

        # Avaliação Semestral Final
        self.lb_AVF = Label(self.frame_1, text="AVF")
        self.lb_AVF.place(relx=0.6, rely=0.6)

        self.AVF_entry = Entry(self.frame_1)
        self.AVF_entry.place(relx=0.6, rely=0.7, relwidth=0.1)

    def lista_frame2(self):
        style = ttk.Style()
        style.configure("Treeview.Heading", font=('verdana', 8, 'bold'), background='#107db2', foreground='black')
        self.lista_notas = ttk.Treeview(self.frame_2, height=3, columns=("Col1", "Col2", "Col3", "Col4", "Col5", "Col6", "Col7", "Col8"))
        self.lista_notas.heading("#0", text="")
        self.lista_notas.heading("#1", text="Matricula")
        self.lista_notas.heading("#2", text="Nome")
        self.lista_notas.heading("#3", text="Simulado 1")
        self.lista_notas.heading("#4", text="Simulado 2")
        self.lista_notas.heading("#5", text="AV")
        self.lista_notas.heading("#6", text="AVF")
        self.lista_notas.heading("#7", text="Nota Final")
        self.lista_notas.heading("#8", text="Resultado")

        # Tamanho das colunas
        self.lista_notas.column("#0", width=1)
        self.lista_notas.column("#1", width=80)
        self.lista_notas.column("#2", width=200)
        self.lista_notas.column("#3", width=50)
        self.lista_notas.column("#4", width=50)
        self.lista_notas.column("#5", width=50)
        self.lista_notas.column("#6", width=50)
        self.lista_notas.column("#7", width=50)
        self.lista_notas.column("#8", width=100)
        

        # Posição das Colunas
        self.lista_notas.place(relx=0.01, rely=0.1, relwidth=0.95, relheight=0.85)

        # barra de rolagem
        self.scroolLista = Scrollbar(self.frame_2, orient="vertical", command=self.lista_notas.yview)
        self.lista_notas.configure(yscroll=self.scroolLista.set)
        self.scroolLista.place(relx=0.96, rely=0.1, relwidth=0.04, relheight=0.85)
        self.lista_notas.bind("<Double-1>", self.DuploClick)
Application()