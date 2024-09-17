#include<stdio.h>
int main ()
{
	int numero1, numero2;
	printf ("Digite numero 1: ");
	scanf ("%d", &numero1);
	printf ("Digite numero 2: ");
	scanf ("%d", &numero2);
	numero1 = numero1 + numero2; 
	numero2 = numero1 - numero2;
	numero1 = numero1 - numero2;
	printf ("%d , %d", numero1, numero2 );
}
