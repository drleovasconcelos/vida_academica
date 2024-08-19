aula01.js

// como criar uma variável?
let escola = 'Infinity School'
let qtdAlunos = 750

//erro
// let escola = 'Infinity School - Salvando'

//Alterando o valor de uma variável
// escola = 'Infinity School - Salvando'

//Const = valor que não irá mudar
const tipoSanguineo = 'A+'
//erro
// tipoSanguineo = 'O+'

alert('Escola: ' + escola)
alert('Quantidade de alunos: ' + qtdAlunos)
alert('Tipo sanguineo: ' + tipoSanguineo)

exemplo: alert

const nome = 'Leonardo Freire'
let idade = 38
let profissao = 'Fisioterapeuta'

alert('Nome: ' + nome) 
alert('Idade: ' + idade)
alert('Profissão: ' + profissao)

//prompt = como se fosse um input 
prompt('digite seu nome: ')

//input usando document - aparece na pela do site, como se fosse o print
let texto = prompt('digite seu nome: ')
document.write('Digite seu nome: ' + texto)

exemplo: 
let nome = prompt('digite seu nome: ')
document.write('Digite seu nome: ' + nome + '<br>')
let idade = prompt('digite seu idade: ')
document.write('Digite seu idade: ' + idade + '<br>')
let profissao = prompt('digite seu profissao: ')
document.write('Digite seu profissao: ' + profissao + '<br>')

// console log, o imput aparece no prompt de comando da área inspecionar no site;.
let nome = prompt('digite seu nome: ')
console.log("Olá, " + nome)

//operações aritméticas
let valor1 = 10
let valor2 = 5
let valor3 = valor1 + valor2
console.log(valor3)
console.log(valor1 - valor2)
console.log(valor2 * 3)
console.log(valor1 / valor2)
console.log(valor2 ** 2) //potencia
console.log(valor1 % valor2) //modulo - resto da divisão
console.log((valor1 + valor2) * 2) // precedencia
document.write('Valor3 = ' + valor3)

exemplo
const produto1 = Number(prompt('Digite um valor: '))
const produtoDesconto = produto1 * 0.9
alert('Total de desconto: ' + produtoDesconto)


// professor

// Como criar uma variável?
let escola = 'Infinity School'
let qtdAlunos = 750

// Erro
// let escola = 'Infinity school - Salvador'

// Alterando o valor de uma variável
escola = 'Infinity school - Salvador'


const tipoSanguineo = 'A+'
// Erro
// tipoSanguineo = 'O-'


alert('Escola: ' + escola)
alert('Quantidade de Alunos: ' + qtdAlunos)
alert('Tipo sanguineo: ' + tipoSanguineo)

// ---------------------------------

let texto = prompt('Digite alguma coisa: ')
document.write("Texto digitado: " + texto)

// ------------------------------------


// Operadores aritméticos
let valor1 = 10
let valor2 = 5
let valor3 = valor1 + valor2

console.log(valor3)
console.log(valor1 - valor2) // subtração
console.log(valor2 * 3) // multiplicação
console.log(valor1 / valor2) // divisão
console.log(valor2 ** 2) // potencia
console.log(valor1 % valor2) // Módulo (resto)
console.log((valor1 + valor2) * 2) // precedencia ()

// ------------------------------------------


const produto1 = Number(prompt('Digite o valor: '))

const produtoDesconto = produto1 * 0.9

alert('Total com desconto: ' + produtoDesconto)
