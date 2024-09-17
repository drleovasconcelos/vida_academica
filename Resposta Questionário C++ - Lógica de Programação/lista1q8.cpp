#include<stdio.h>
int main ()
{
	int numero1, numero2, auxiliar;
	printf ("Digite numero 1: ");
	scanf ("%d", &numero1);
	printf ("Digite numero 2: ");
	scanf ("%d", &numero2);
	auxiliar = numero1;
	numero1 = numero2;
	numero2 = auxiliar;
	printf ("Novo valor de numero 1: ");
	printf ("%d ", numero1);
	printf ("Novo valor de numero 2: ");
	printf ("%d ", numero2);
}
