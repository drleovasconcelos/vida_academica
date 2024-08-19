
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
