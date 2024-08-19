from tkinter import *
from tkinter.ttk import *

listaLivros = []

def btnInserir_Click(varResultado, lblResultado):
    titulo = entrada1.get()
    autor = entrada2.get()
        
    if titulo == "" or autor == "":
        varResultado.set("Erro ao inserir novo registro.")
        lblResultado.configure(background="#99FF99")
    else:
        l = Livro(titulo, autor, len(listaLivros) + 1, "Disponível")
        listaLivros.append(l)
        varResultado.set("Registro inserido.")
        lblResultado.configure(background="#99FF99")
        entrada1.delete(0, END)
        entrada2.delete(0, END)
        entrada1.focus()

def btnMostrar_Click():
    print("*********Livros**********")
    for i in listaLivros:            
        print(i.titulo)
        print(i.autor)
        print(i.ID)
        print(i.status_emprestimo)
        print("*************************")

def btnEditar_Click(varResultado, lblResultado):
    titulo = entrada1.get()
    autor = entrada2.get()
    for obj in listaLivros:
        if obj.titulo == titulo:
            obj.autor = autor
            varResultado.set("Registro alterado.")
            lblResultado.configure(background="#99FF99")
            entrada1.delete(0, END)
            entrada2.delete(0, END)
            entrada1.focus()
            return
    varResultado.set("Erro ao alterar registro: Livro não encontrado.")
    lblResultado.configure(background="#99FF99")

def btnExcluir_Click(varResultado, lblResultado, id_excluir):
    id_excluir = int(entrada_id.get())
    for obj in listaLivros:
        if obj.ID == id_excluir:
            listaLivros.remove(obj)
            varResultado.set("Registro excluído.")
            lblResultado.configure(background="#99FF99")
            entrada1.delete(0, END)
            entrada1.focus()
            return
    varResultado.set("Erro ao excluir registro: Livro não encontrado.")
    lblResultado.configure(background="#99FF99")

class Livro():
    def __init__(self, titulo, autor, ID, status_emprestimo): 
        self.titulo = titulo
        self.autor = autor
        self.ID = ID
        self.status_emprestimo = status_emprestimo 

janela = Tk()
janela.title("Livraria do Leonardo")
janela.geometry("600x400+500+200")
janela.iconbitmap("education_books_library_icon_149685.ico")
janela.resizable(False, False)

tituloLabel = Label(text="Informe o Título do Livro: ")
tituloLabel.pack()
entrada1 = Entry(width=50)
entrada1.pack()
entrada1.focus() 

autorLabel = Label(text="Informe o Autor: ")
autorLabel.pack()
entrada2 = Entry(width=50)
entrada2.pack()

idLabel = Label(text="Informe o ID do Livro a Excluir: ")
idLabel.pack()
entrada_id = Entry(width=10)
entrada_id.pack()


varResultado = StringVar()
resultadoLabel = Label(textvariable=varResultado)
resultadoLabel.pack()

frame_botoes = Frame(janela)
frame_botoes.pack(side="right", padx=10)

cadastrarLivro = Button(text="Cadastrar Livro", command=lambda: btnInserir_Click(varResultado, resultadoLabel))
cadastrarLivro.pack(fill=X, pady=5)
mostrarLivro = Button(text="Mostrar Livro", command=btnMostrar_Click)
mostrarLivro.pack(fill=X, pady=5)
editarLivro = Button(text="Editar Livro", command=lambda: btnEditar_Click(varResultado, resultadoLabel))
editarLivro.pack(fill=X, pady=5)
excluirLivro = Button(text="Excluir Livro", command=lambda: btnExcluir_Click(varResultado, resultadoLabel, entrada_id.get()))
excluirLivro.pack(fill=X, pady=5)

janela.mainloop()