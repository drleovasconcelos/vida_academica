https://drive.google.com/file/d/1GId83gSbOZmzERcfCmr8vTyFJ_m5lR7O/view

------------------------------------------------------------------------------

const salarios = [1500, 1800, 2100, 3300, 4000, 5100, 5500]
const salariosAjustados = salarios.map(salario => {
    return salario * 1.1
})

console.log(salariosAjustados)


const salariosAbaixo = salarios.filter(salario => {
    return salario < 3000
})

console.log(salariosAbaixo)


const soma = salarios.reduce((acumulador, salario) => {
    return acumulador + salario
})

console.log(soma)
----------------------------------------------------------------------------------------

const cursos = [
    { "cod": 1, "nome": "javascript", "cargaHoraria": 300 },
    { "cod": 2, "nome": "python", "cargaHoraria": 180 }
]

console.log(cursos)

const pessoa = {
    nome: "Lucas",
    idade: 15,
    curso: "Python"
}


console.log(pessoa.nome)
console.log(pessoa['nome'])

pessoa.nome = "Lucas oliveira"
console.log(pessoa.nome)


console.log(JSON.stringify(pessoa))


const dados = JSON.stringify(pessoa)

console.log(JSON.parse(dados))
-----------------------------------------------------


const livro = {
    titulo: "Harry potter",
    autor: "JK",
    anoPublicacao: 1997,
    "palavras-chaves": ['aventura', 'infantil',]
}

const alunos = [
    {id: 1, nome: 'jonas', curso: "python", nota: 10},
    {id: 2, nome: 'marina', curso: "javascript", nota: 9},
]

const aluno = {
    id: 3, nome: "marcos", curso: "django", nota: 8.5
}

alunos.push(aluno)


for (const a of alunos) {       
    if (a.curso === "python") {
        a.nota = 10
    }
}


---------------------------------------------------------------------------------------- JSON
const cursos = [
    {"cod": 1, "nome": "javascript", "cargaHoraria": 300},
    {"cod": 2, "nome": "python", "cargaHoraria": 180}
]
console.log(cursos)

const pessoa = {
    nome: "Lucas",
    idade: 15,
    curso: "Python"
}

console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa['nome'])

// alterar valor
pessoa.nome = "Lucas Oliveira"
console.log(pessoa.nome)

// converter objeto em json
console.log(JSON.stringify(pessoa))

// converter JSON em objeto
const dados = JSON.stringify(pessoa)
console.log(JSON.parse(dados))