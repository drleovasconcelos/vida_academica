/* Elabore um algoritmo para imprimir os 20 primeiros números conforme a sequência
S = 1 4 9 16 25 36 ...*/
//
//#include<stdio.h>
//int main ()
//{
//	int i, soma = 0;
//		
//	for (i = 1; i <= 20; i++)
//	{
//	 	printf ("%d ", i*i);
//	}
//}

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
