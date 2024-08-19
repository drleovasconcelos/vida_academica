
desafios --------------------
1. Leia um número e informe se ele é ou não um número perfeito
Exemplo 
6 
1  + 2 + 3 = 6
--------------------------------------------------
2.  Leia um número e informe se ele é ou não um número primo
Número primo: Só é divisivel por 1 e por ele mesmo


let contador = 1
numero = Number(prompt('Digite o número: '))
let qtdDivisores = 0
while (contador <= numero  ) {
    if (numero % contador === 0) {
    }
    contador++
}
if (qtdDivisores === 2) {
    alert('Número Primo')
}
else {
    alert('Não é número primo')
}

-------------------------------------------------
3. Leia um número n e informe o n termo da sequencia de fibonnaci
Sequencia 1 1 2 3 5 8 13 21

// professor

https://drive.google.com/file/d/1P_T_t4iHwCW3a6rndtqeqP8G-EsODtPJ/viexX

--------------------------------------------------------------

let contador = 0

while (contador < 100) {
    console.log('Infinity School')

    contador++
}

------------------------------------------------------------

// 1. Leia um número e informe se ele é ou não um número primo
/* 
- 2 divisoes

5
5 % 1 = 0
5 % 2 != 0
5 % 3 != 0
5 % 4 != 0
5 % 5 = 0


*/

let contador = 1
let numero = Number(prompt('Digite o valor: '))
let qtdDivisores = 0

while (contador <= numero) {
    if (numero % contador === 0) {
        qtdDivisores++
    }

    contador++
}

if (qtdDivisores === 2) {
    alert('É um número primo')
}
else {
    alert('Não é um número primo')
}
---------------------------------------------------------------

for (let count = 0; count < 100; count++) {
    console.log('Infinity school')
}

-------------------------------------------------------------
--- Todos utilizando for ----
1. Imprima uma sequencia de 0 a 100
for (let count = 0; count <= 100; count++) {
    console.log(count)
}

-------------------------------------------------
2. Imprima 100 vezes o seu nome
for (let i = 0; i < 100; i++) {
    console.log('Carlos Sousa')
}
--------------------------------------------------
3. Imprima uma sequencia de 0 até um número digitado pelo usuário
let numero = Number(prompt('Digite o número: '))
for (let i = 0; i <= numero; i++) {
    console.log(i)
}
--------------------------------------------------------------------------------------------
4. Imprima uma sequencia com todos os pares de 0 a 100
for (let count = 0; count <= 100; count++) {
    if (count % 2 === 0) {
        console.log(count)
    }
}
-----------------------------------------
5. Imprima uma sequencia com todos os pares de 0 até um número digitado pelo usuário

const numero = Number(prompt('Digite um número: '))

for (let count = 0; count <= numero; count++) {
    if (count % 2 === 0) {
        console.log(count)
    }
}
------------------------------------------
6. Leia o nome de 10 produtos.
for (let count = 0; count < 10; count++) {
    prompt('Digite o nome do produto: ')
}
------------------------------------------
7. Leia 10 números e ao final imprima a quantidade de pares digitados

let pares = 0
for (let i = 0; i < 10; i++) {
    let numero = Number(prompt('Digite um número: '))
    if (numero % 2 === 0) {
        pares++
    }
}

console.log(`Quantidade de pares: ${pares}`)
----------------------------------------------------------------------
8. Leia 10 números e ao final imprima
a) A quantidade de impares digitados
b) A quantidade de números menores que 30
c) A quantidade de números multiplos de 3 e 5
9. Leia um número e exiba a tabuada de multiplicação deste número
10. Leia um número e exiba o fatorial deste número
11. Leia n números e ao final imprima a soma de todos os números digitados
12. Imprima uma contagem regressiva de 100 a 0
13. Imprima uma piramide no console
*
**
***
****
*****

let x = '*'

for (let i = 0; i < 5; i++) {
    console.log(x)
    x += '*'
}
----------------------------------------------

let texto = 'Infinity School'

for (const letra of texto) {
    console.log(letra)
}

1. Leia uma palavra e imprima todas as vogais

const palavra = prompt('Digite uma palavra: ').toLowerCase()
for (const letra of palavra) {
    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        console.log(letra)
    }
}

2. Imprimir a quantidade de vogais na palavra digitada ao final do laço

const palavra = prompt('Digite uma palavra: ').toLowerCase()
let quantidade = 0
for (const letra of palavra) {
    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        console.log(letra)
        quantidade++
    }
}

console.log(`Quantidade de vogais: ${quantidade}`)

--------------------------------------------------------------------------

1. Sistema de radar
2. Crie um sistema que vai capturar as velocidades que os passam no radar que você está controlando.
3. Para começar solicite ao usuário a quantidade de veiculos que passaram pelo radar, para cada veiculo leia a velocidade que o veiculo passou, em seguida verifique se ele está acima da velocidade permitida (50), caso o veiculo ultrapasse o limite calcule o valor da multa que varia de acordo com o limite ultrapassado
- Até 20% acima do limite - valor 130 (média)
- Entre 20% e 50% acima do limite - valor 195 (grave)
- Acima de 50% - valor 880 (gravissima)

Ao final do programa exiba o total arrecadado de multas médias, graves e gravissimas.
A soma total de todas as multas
- A quantidade de infrações
- A quantidade individual de cada infração
- A representação desses totais em porcentagem