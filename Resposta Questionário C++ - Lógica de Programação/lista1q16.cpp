/*16. Uma determinada farmácia utiliza a seguinte tabela de descontos para os seus
medicamentos vendidos:

Classe do medicamento % de desconto
A 10
B 15
C 20

Elabore um algoritmo que receba o valor de um medicamento e a sua classe como
entrada, calcule o valor do desconto e forneça como saída o desconto calculado e o
valor final do medicamento. Exemplo:
? Se a entrada for R$ 97,00 e classe A, a saída será R$ 9,70 de desconto e valor
final do medicamento R$ 87,30;
? Se a entrada for R$ 100,00 e classe C, a saída será R$ 20,00 de desconto e valor
final do medicamento R$ 80,00.*/

#include<stdio.h>
int main ()
{
	int valor, produto, desconto, classe, A, B, C;
	printf ("Valor do produto: ");
	scanf ("%d", &produto);
	printf ("Classe do produto: ");
	scanf ("%d", &classe);
	A = produto - 10%;
	B = produto - 15%;
	C = produto - 20%;
	printf ("")
}
