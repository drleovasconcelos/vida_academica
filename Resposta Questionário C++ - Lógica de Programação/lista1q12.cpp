/*Um algoritmo para gerenciar os saques de um caixa eletrônico deve possuir algum
mecanismo para decidir o número de notas de cada valor que deve ser
disponibilizado para o cliente que realizou o saque. Um possível critério é o da
“distribuição ótima” no sentido de que as notas de menor valor são distribuídas em
número mínimo possível. Exemplo:
a. Se a quantia solicitada for R$ 6,00, o algoritmo dever indicar uma nota de R$
5,00 e uma nota de R$ 1,00;
b. Se a quantia solicitada for R$ 17,00, o algoritmo deve indicar uma nota de R$
10,00, uma nota de R$ 5,00 e duas notas de R$ 1,00;
c. Se a quantia solicitada for R$ 87,00, o algoritmo deve indicar uma nota de R$
50,00, três notas de R$ 10,00, uma nota de R$ 5,00 e duas notas de R$ 1,00;*/

#include<stdio.h>
int main ()
{
	int saque, c50, c20, c10, c5, c1, sobrade50, sobrade20, sobrade10, sobrade5, sobrade1;
	printf ("Digite o valor do saque: ");
	scanf ("%d", &saque);
	c50 = saque / 50;
	saque = saque % 50;
	c20 = saque / 20;
	saque = saque % 20;
	c10 = saque / 10;
	saque = saque % 10;
	c5 = saque / 5;
	saque = saque % 5;
	c1 = saque / 1;
	saque = saque % 1;
	printf ("50 = %d,  20 = %d,  10 = %d,  5 = %d,  1 = %d", c50, c20, c10, c5, c1);	
}
