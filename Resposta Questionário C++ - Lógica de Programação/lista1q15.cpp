/*Elabore um algoritmo que receba um n�mero inteiro como entrada e forne�a como
sa�da se esse n�mero � par ou �mpar. Exemplo:

? Se a entrada for 6, o algoritmo deve fornecer como sa�da �O n�mero � par�;
? Se a entrada for 13, o algoritmo deve fornecer como sa�da o �O n�mero �
�mpar�;
? Se a entrada for 1001, o algoritmo deve fornecer como sa�da o �O n�mero �
�mpar�.*/

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
