// professor

https://drive.google.com/file/d/1qKoWByYxaXwEKXLSXx_WR05fUNMgPzph/view

/*
>
>=
<
<=
===
!==

lógicos
&& -> só dar true se tudo for true
|| -> só da false se tudo for false
! -> Inverte o resultado
*/

const idade = 19

if (idade >= 18) {
    alert('Você é maior de idade!')
}
else {
    alert('Você é menor de idade!')
}

----------------------------------------------------------------------

// 5. Leia três lados de um triangulo e informe se ele é um triangulo
// equilatero - Tres lados iguais
// isoceles - dois lados iguais
// escaleno - tres lados diferentes


let a = Number(prompt('Digite o valor do lado a: '))
let b = Number(prompt('Digite o valor do lado b: '))
let c = Number(prompt('Digite o valor do lado c: '))

if (a === b && a === c) {
    alert('Triangulo equilatero')
}
else if (a !== b && a !== c && b !== c) {
    alert('Triangulo escaleno')
}
else {
    alert('Triangulo isoceles')
}

------------------------------------------------------------------------

/*
if (condição) {
    <codigo>
}

while (condição) {
    <codigo>
}
*/

// 1 - Cria o contador
let contador = 0

// 2 - Criar a condição
while (contador < 20) {
    
    // 3 - código
    console.log('Infinity School')
    console.log(`Contador = ${contador}`)
    // 4 - incremento
    contador++
    // contador += 1
    // contador = contador + 1
}
--------------------------------------------------------------------

let contador = 0

while (contador < 10) {
    const produto = prompt(`Digite o ${contador + 1}º produto: `)

    contador++
}

--------------------------------------------------------

1 - Imprima seu nome 100 vezes no console.
let contador = 0
while (contador < 100) {
    console.log('Carlos')

    contador++
}
--------------------------------------------------------------------
2 - Imprima uma sequencia de 0 a 100 no console

let contador = 0

while (contador < 101) {
    console.log(contador)

    contador++
}
-----------------------------------------------------------------
3 - Imprima uma sequencua de 0 até um número digitado pelo usuário
let contador = 0
const numero = Number(prompt('Digite o número: '))
while (contador <= numero) {
    console.log(contador)

    contador++
}
----------------------------------------------------------------
4 - Imprima uma sequencia com todos os pares de 0 a 100

let contador = 0
while (contador <= 100) {
    if (contador % 2 === 0){
        console.log(contador)
    }

    contador++
}
-----------------------------------------------------------
5 - Imprima uma sequencia com todos os pares de 0 até um número digitado pelo usuário

let contador = 0
let numero = Number(prompt('Digite o número: '))
while (contador <= numero) {
    if (contador % 2 === 0) {
        console.log(contador)
    }

    contador++
}
-------------------------------------------------------
6 - Imprima uma sequencia de 100 a 0

let contador = 100
while (contador >= 0) {
    console.log(contador)


    contador--
}
-----------------------------------------------------------
7 - Leia 10 números usando while

let contador = 0
while (contador < 10) {
    let numero = Number(prompt('Digite o número: '))

    contador++
}
---------------------------------------------------
8 - Leia 10 números e ao final exiba a soma de todos os números digitados

let contador = 0
let soma = 0
while (contador < 10) {
    let numero = Number(prompt('Digite o número: '))
    soma = soma + numero

    contador++
}

alert(soma)
--------------------------------------------------
9 - Leia 10 núemros e ao final exiba a média dos números digitados
10 - Imprima a seguinte sequencia 
I = 1 J = 1
I = 2 J = 4
I = 3 J = 7
..
I = 10 J = ???

11 - Imprima a seguinte sequencia
I = 1 J = 1
I = 2 J = 2
I = 3 J = 3
I = 4 J = 1
I = 5 J = 2
I = 6 J = 3
I = 7 J = 1
...
I = 30 J = ???
-----------------------------------------------------

desafios --------------------
1. Leia um número e informe se ele é ou não um número perfeito
Exemplo 
6 
1  + 2 + 3 = 6
--------------------------------------------------
2.  Leia um número e informe se ele é ou não um número primo
Número primo: Só é divisivel por 1 e por ele mesmo
-------------------------------------------------
3. Leia um número n e informe o n termo da sequencia de fibonnaci
Sequencia 1 1 2 3 5 8 13 21



--------------------------------------------------


while (true) {
    let numero = Number(prompt('Digite um número: '))

    if (numero < 0) {
        break
    }
}

--------------------------------------------------

let contador = 0
while (contador < 10) {
    let idade = Number(prompt('Digite sua idade: '))
    contador++

    if (idade > 18) {
        continue
    }

    let ano = prompt('Qual ano do ensino você se encontra: ')
    
}

-----------------------------------------------------------
1. Leia idade, sexo (M/F) e salário de N habitantes e ao final do programa informe:
a) A Maior idade digitada
b) A Menor idade digitada
c) A média de idades
d) O maior salário digitado
e) O menor salário digitado
f) A média salarial
g) A idade e o sexo da pessoa com o menor salário
h) Quantidade de mulheres

Encerre o programa quando uma idade negativa for digitada