/*Elaborar programa que l� dois n�meros quaisquer e mostra na tela uma mensagem
indicando qual � o maior, ou se s�o iguais.*/

#include<stdio.h>
int main ()
{
	int a, b;
	printf ("Digite o numero A: ");
	scanf ("%d", &a);
	printf ("Digite o numero B: ");
	scanf ("%d", &b);
	a != b;
	if (a > b)
	{
		printf ("a maior que b");
	}
	else if (b > a)
	{
		printf ("b maior que a");
	}
	else
	{ 
		printf ("os dois s�o iguais");
	}
}
