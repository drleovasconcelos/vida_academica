/* Elabore um algoritmo para imprimir os 20 primeiros n�meros conforme a sequ�ncia
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

/*Elabore um algoritmo para imprimir os n primeiros n�meros da sequ�ncia S, onde n
� um n�mero inteiro positivo digitado pelo usu�rio S = 1 8 27 64 126 216 ...*/

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
