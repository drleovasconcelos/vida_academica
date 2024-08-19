
-------------------------------------------------------------------------------------

1. Solicite o preço e a quantidade selecionada, em seguida exiba o valor total

let preco = Number(prompt('Digite o preço: '))
let quantidade = Number(prompt('Digite a quantidade: '))
let total = preco * quantidade
alert('Total: ' + total)


/*
Operadores relacionais / comparação
Maior >
Maior ou igual >=
Menor <
Menor ou igual <=
Diferente !==
Igual ===
*/
let ativo = true
let disponivel = false

let a = 10
let b = a + 2
console.log(a === b)
console.log(b > a)
console.log(b !== a)

------------------------------------------------

/*
Operadores lógicos
&& e -> só da true, se tudo for true
|| ou -> só da false, se tudo for false
! Não
!true = false
!false = true
*/

let login = 'admin'
let senha = '123'
console.log(login === 'admin' && senha === '123')

// I = idoso E = estudante P = professor
let cat = 'I'
console.log(cat === 'I' || cat === 'P' || cat === 'E')

------------------------------------------------------

let a = 10
let b = 5
let c = a + b 

console.log(!(((a >= c - 1) ||  (b * 2 === 10)) && (a * 2 - 5 === c)))

let nota = Number(prompt('Digite sua nota: '))
let faltas = Number(prompt('Digite o total de faltas: '))

if (faltas <= 5) {
    nota = nota + 1
    // nota += 1
    // nota++
    alert('Você ganhou 1pt, sua nota = ' + nota)
}
else {
    alert('Sua nota é a mesma: ' + nota)
}



/*
if (condição) {
    codigo se a condição for verdadeira
}
else {
    condigo se a condição for false
}

*/

------------------------------------------------------------------------------------
1. Solicite a idade de um usuário e informe se ele é ou não maior de idade
let idade = Number(prompt('Digite sua idade: '))
if (idade >= 18) {
    alert('Você é maior de idade!')
}
else {
    alert('Você é menor de idade!')
}
-------------------------------------
2. Leia três notas, calcule a média. Se a media for maior ou igual a 6 informe que ele está aprovado, senão, informe que ele está de recuperação
let nota1 = Number(prompt('Digite uma nota: '))
let nota2 = Number(prompt('Digite uma nota: '))
let nota3 = Number(prompt('Digite uma nota: '))
let media = (nota1 + nota2 + nota3) / 3

if (media >= 6) {
    alert('Você está Aprovado')
}
else {
    alert('Você está Recuperação')
}
-------------------------------------------
3. Solicite dois números e exiba o maior
let num1 = Number(prompt('Digite o primeiro valor: '))
let num2 = Number(prompt('Digite o segundo valor: '))
if (num1 > num2) {
    alert(num1)
}
else {
    alert(num2)
}
-------------------------------------------
4. Leia um número e informe se ele é positivo ou negativo
let num = Number(prompt('Digite um número: '))

if (num > 0) {
    alert('positivo')
}
else {
    alert('negativo')
}
------------------------------------
5. Leia um número e informe se ele é par ou ímpar

let num = Number(prompt('Digite um número: '))
if (num % 2 === 0) {
    alert('Número par')
}
else {
    alert('Número ímpar')
}
----------------------------------------------
6. Leia a velocidade do veiculo e caso ele tenha passado do limite (50km) imprima "Você está acima do limite" senão imprima "Você está dentro do limite"

let velocidade = Number(prompt('Digite a velocidade:'))
if (velocidade > 50) {
    alert('Acima do limite')
}
else {
    alert('Dentro do limite')
}
-----------------------------------------------
7. Solicite ao usuário um número e informe se este número esta entre 5 e 15.

let num = Number(prompt('Digite um número: '))
if (num >= 5 && num <= 15) {
    alert('Dentro do intervalo')
}
else {
    alert('Fora do intervalo')
}
------------------------------
8. Peça para o usuário digitar uma letra e informe se esta letra é uma vogal ou uma consoante
9. Leia 4 valores inteiros A, B, C e D. A seguir, se B for maior do que C e se D for maior do que A, e a soma de C com D for maior que a soma de A e B e se C e D forem positivos e se A for par escrever a mensagem "Valores aceitos" senão escrever a mensagem "Valores não aceitos"

Valores aceitos = 2 3 2 6

--------------------------------------------------

let num1 = Number(prompt('Digite um número: '))
let num2 = Number(prompt('Digite um número: '))
if (num1 > num2) {
    alert(num1)
}
else if (num1 === num2) {
    alert('Os dois são iguais')
}
else {
    alert(num2)
}

---------------------------------------------------------------
1. Leia a cor do semaforo, e informe se ele pode
verde - seguir
amarelo - ter atenção
vermelho - parar

let cor = prompt('Digite a cor do semaforo: ')

if (cor === 'vermelho') {
    alert('Pare')
}
else if (cor === 'amarelo') {
    alert('Atenção')
}
else {
    alert('Siga')
}
--------------------------------------------------------------
2. Leia o ddd e informe a região
85 - Fortaleza
11 - São Paulo
21 - Rio de Janeiro
88 - Interior do Ceará
outros - DDD inválido

let ddd = Number(prompt('Digite o ddd: '))
if (ddd === 85) {
    alert('Fortaleza')
}
else if (ddd === 88) {
    alert('Interior Ceará')
}
else if (ddd === 11) {
    alert('São Paulo')
}
else if (ddd === 21) {
    alert('Rio de janeiro')
}
else {
    alert('DDD inválido')
}
-------------------------------------------------------
--------------------------------------------------------------
3. Leia três notas, calcule a média e se 
media acima de 8 - "Aprovado com honras"
media entre 6 e 8 - "Aprovado"
media entre 4 e 6 - "Recuperação"
media abaixo de 4 - Reprovado

let nota1 = Number(prompt('Digite a nota: '))
let nota2 = Number(prompt('Digite a nota: '))
let nota3 = Number(prompt('Digite a nota: '))
let media = (nota1 + nota2 + nota3) / 3
if (media >= 8) {
    alert('Aprovado com honras')
}
else if (media >= 6 && media < 8) {
    alert('Aprovado')
}
else if (media >= 4 && media < 6) {
    alert('Recuperação')
}
else {
    alert('Reprovado')
}
-------------------------------------------------------
--------------------------------------------------------------
4. Leia o salário de um funcionário e se 
salario acima de 8.000 - Dev Senior
salario entre 6 e 8 - Dev Pleno
Salario entre 3 e 6 - Deve junior
Abaixo de 3 - Estagiario/trainee

let salario = Number(prompt('Digite o seu salario: '))

if (salario > 8000) {
    alert('Dev Senior')
}
else if (salario >= 6000) {
    alert('Dev Pleno')
}
else if (salario >= 3000) {
    alert('Dev Junior')
}
else {
    alert('Estagiario/Trainee')
}

--------------------------------------------------------------
5. Leia três lados de um triangulo e informe se ele é um triangulo
equilatero - Tres lados iguais
isoceles - dois lados iguais
escaleno - tres lados diferentes

let a = Number(prompt('Digite a: '))
let b = Number(prompt('Digite b: '))
let c = Number(prompt('Digite c: '))

if (a===b && a===c){
    alert('Triangulo Equilatero!')
}
if (a!==b && a!==c && b!==c){
    alert('Triangulo Escaleno!')
}
else {
    alert('Triangulo isoceles!')
}
-------------------------------------------------------------
6. Pedra, papel e tesoura. Leia a escolha de dois jogadores e informe o vencedor
7. Leia os valores de x e y e informe em qual quadrantes as coordenadas batem, usem a imagem como referencia
https://static.todamateria.com.br/upload/57/e3/57e327cf7950a-plano-cartesiano.jpg



// PROFESSOR

1. Solicite o preço e a quantidade selecionada, em seguida exiba o valor total

let preco = Number(prompt('Digite o preço: '))
let quantidade = Number(prompt('Digite a quantidade: '))
let total = preco * quantidade
alert('Total: ' + total)


/*
Operadores relacionais / comparação
Maior >
Maior ou igual >=
Menor <
Menor ou igual <=
Diferente !==
Igual ===
*/
let ativo = true
let disponivel = false

let a = 10
let b = a + 2
console.log(a === b)
console.log(b > a)
console.log(b !== a)

------------------------------------------------

/*
Operadores lógicos
&& e -> só da true, se tudo for true
|| ou -> só da false, se tudo for false
! Não
!true = false
!false = true
*/

let login = 'admin'
let senha = '123'
console.log(login === 'admin' && senha === '123')

// I = idoso E = estudante P = professor
let cat = 'I'
console.log(cat === 'I' || cat === 'P' || cat === 'E')

------------------------------------------------------

let a = 10
let b = 5
let c = a + b 

console.log(!(((a >= c - 1) ||  (b * 2 === 10)) && (a * 2 - 5 === c)))

let nota = Number(prompt('Digite sua nota: '))
let faltas = Number(prompt('Digite o total de faltas: '))

if (faltas <= 5) {
    nota = nota + 1
    // nota += 1
    // nota++
    alert('Você ganhou 1pt, sua nota = ' + nota)
}
else {
    alert('Sua nota é a mesma: ' + nota)
}



/*
if (condição) {
    codigo se a condição for verdadeira
}
else {
    condigo se a condição for false
}

*/

------------------------------------------------------------------------------------
1. Solicite a idade de um usuário e informe se ele é ou não maior de idade
let idade = Number(prompt('Digite sua idade: '))
if (idade >= 18) {
    alert('Você é maior de idade!')
}
else {
    alert('Você é menor de idade!')
}
-------------------------------------
2. Leia três notas, calcule a média. Se a media for maior ou igual a 6 informe que ele está aprovado, senão, informe que ele está de recuperação
let nota1 = Number(prompt('Digite uma nota: '))
let nota2 = Number(prompt('Digite uma nota: '))
let nota3 = Number(prompt('Digite uma nota: '))
let media = (nota1 + nota2 + nota3) / 3

if (media >= 6) {
    alert('Você está Aprovado')
}
else {
    alert('Você está Recuperação')
}
-------------------------------------------
3. Solicite dois números e exiba o maior
let num1 = Number(prompt('Digite o primeiro valor: '))
let num2 = Number(prompt('Digite o segundo valor: '))
if (num1 > num2) {
    alert(num1)
}
else {
    alert(num2)
}
-------------------------------------------
4. Leia um número e informe se ele é positivo ou negativo
let num = Number(prompt('Digite um número: '))

if (num > 0) {
    alert('positivo')
}
else {
    alert('negativo')
}
------------------------------------
5. Leia um número e informe se ele é par ou ímpar

let num = Number(prompt('Digite um número: '))
if (num % 2 === 0) {
    alert('Número par')
}
else {
    alert('Número ímpar')
}
// ----------------------------------------------
6. Leia a velocidade do veiculo e caso ele tenha passado do limite (50km) imprima "Você está acima do limite" senão imprima "Você está dentro do limite"

let velocidade = Number(prompt('Digite a velocidade:'))
if (velocidade > 50) {
    alert('Acima do limite')
}
else {
    alert('Dentro do limite')
}
// -----------------------------------------------
7. Solicite ao usuário um número e informe se este número esta entre 5 e 15.

let num = Number(prompt('Digite um número: '))
if (num >= 5 && num <= 15) {
    alert('Dentro do intervalo')
}
else {
    alert('Fora do intervalo')
}
// ------------------------------
8. Peça para o usuário digitar uma letra e informe se esta letra é uma vogal ou uma consoante
9. Leia 4 valores inteiros A, B, C e D. A seguir, se B for maior do que C e se D for maior do que A, e a soma de C com D for maior que a soma de A e B e se C e D forem positivos e se A for par escrever a mensagem "Valores aceitos" senão escrever a mensagem "Valores não aceitos"

Valores aceitos = 2 3 2 6

--------------------------------------------------

let num1 = Number(prompt('Digite um número: '))
let num2 = Number(prompt('Digite um número: '))
if (num1 > num2) {
    alert(num1)
}
else if (num1 === num2) {
    alert('Os dois são iguais')
}
else {
    alert(num2)
}

---------------------------------------------------------------
1. Leia a cor do semaforo, e informe se ele pode
verde - seguir
amarelo - ter atenção
vermelho - parar

let cor = prompt('Digite a cor do semaforo: ')

if (cor === 'vermelho') {
    alert('Pare')
}
else if (cor === 'amarelo') {
    alert('Atenção')
}
else {
    alert('Siga')
}
--------------------------------------------------------------
2. Leia o ddd e informe a região
85 - Fortaleza
11 - São Paulo
21 - Rio de Janeiro
88 - Interior do Ceará
outros - DDD inválido

let ddd = Number(prompt('Digite o ddd: '))
if (ddd === 85) {
    alert('Fortaleza')
}
else if (ddd === 88) {
    alert('Interior Ceará')
}
else if (ddd === 11) {
    alert('São Paulo')
}
else if (ddd === 21) {
    alert('Rio de janeiro')
}
else {
    alert('DDD inválido')
}
-------------------------------------------------------
--------------------------------------------------------------
3. Leia três notas, calcule a média e se 
media acima de 8 - "Aprovado com honras"
media entre 6 e 8 - "Aprovado"
media entre 4 e 6 - "Recuperação"
media abaixo de 4 - Reprovado

let nota1 = Number(prompt('Digite a nota: '))
let nota2 = Number(prompt('Digite a nota: '))
let nota3 = Number(prompt('Digite a nota: '))
let media = (nota1 + nota2 + nota3) / 3
if (media >= 8) {
    alert('Aprovado com honras')
}
else if (media >= 6 && media < 8) {
    alert('Aprovado')
}
else if (media >= 4 && media < 6) {
    alert('Recuperação')
}
else {
    alert('Reprovado')
}
-------------------------------------------------------
--------------------------------------------------------------
4. Leia o salário de um funcionário e se 
salario acima de 8.000 - Dev Senior
salario entre 6 e 8 - Dev Pleno
Salario entre 3 e 6 - Deve junior
Abaixo de 3 - Estagiario/trainee

let salario = Number(prompt('Digite o seu salario: '))

if (salario > 8000) {
    alert('Dev Senior')
}
else if (salario >= 6000) {
    alert('Dev Pleno')
}
else if (salario >= 3000) {
    alert('Dev Junior')
}
else {
    alert('Estagiario/Trainee')
}

--------------------------------------------------------------
5. Leia três lados de um triangulo e informe se ele é um triangulo
equilatero - Tres lados iguais
isoceles - dois lados iguais
escaleno - tres lados diferentes
-------------------------------------------------------------
6. Pedra, papel e tesoura. Leia a escolha de dois jogadores e informe o vencedor
7. Leia os valores de x e y e informe em qual quadrantes as coordenadas batem, usem a imagem como referencia
https://static.todamateria.com.br/upload/57/e3/57e327cf7950a-plano-cartesiano.jpg


