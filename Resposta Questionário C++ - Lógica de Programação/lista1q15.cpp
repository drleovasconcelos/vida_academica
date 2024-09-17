/*Elabore um algoritmo que receba um número inteiro como entrada e forneça como
saída se esse número é par ou ímpar. Exemplo:

? Se a entrada for 6, o algoritmo deve fornecer como saída “O número é par”;
? Se a entrada for 13, o algoritmo deve fornecer como saída o “O número é
ímpar”;
? Se a entrada for 1001, o algoritmo deve fornecer como saída o “O número é
ímpar”.*/

#include<stdio.h>
int main ()
{
	int x, numero;
	printf ("Digite o numero: ");
	scanf ("%d", &numero);
	
	if (numero % 2 ==0)
	{
		printf ("O numero e par");
	}
	else
	{
		printf ("O numero e impar");
	}

}
