/* Elabore um algoritmo que leia 10 números inteiros pelo teclado e imprima na tela se
o número está ou não no intervalo de 10 a 50.*/

//#include<stdio.h>
//int main ()
//{
//	int i, soma = 0;
//	for (i = 10; i <= 50; i++)
//	{
//		soma = soma + i;
//	}
//	printf ("%d", soma);
//}
//------------
//	int
//	for (i = 10; i <= 50; i++)
//	{
//		printf ("%d ", i);
//	}-----------
	
#include<stdio.h>
int main ()
{
	int n1, n2, n3;
	printf ("digite o numero1: ");
	scanf ("%d", &n1);
	if (n1 > 10 && n1 < 50)
	{
		printf ("o numero %d esta entre 10 e 50", n1 );
	}
	else 
	{
		printf (" o numero nao esta no intevalo");
	}
}
