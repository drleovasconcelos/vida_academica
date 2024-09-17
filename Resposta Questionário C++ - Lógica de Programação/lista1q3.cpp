#include<stdio.h>
int main ()
{
	int numero1, numero2, numero3;
	float media;
	printf ("Digite numero 1: ");
	scanf ("%d", &numero1);
	printf ("Digite numero 2: ");
	scanf ("%d", &numero2);
	printf ("Digite numero 3: ");
	scanf ("%d", &numero3);
	media = (numero1+numero2+numero3)/3.0;
	printf("\nmedia = %f", media);
	
}
