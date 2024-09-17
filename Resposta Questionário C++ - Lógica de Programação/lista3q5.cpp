/*Elabore um algoritmo para imprimir os n primeiros números da sequência S, onde n
é um número inteiro positivo digitado pelo usuário S = 1 8 27 64 126 216 ...*/

#include<stdio.h>
int main ()
{
	int i, n, soma = 0;
	printf ("Digite o numero: ");
	scanf ("%d", &n);
	
	for (i = 1; i <= n ; i++)
	{
		printf ("%d ", i*i);
	}
}
