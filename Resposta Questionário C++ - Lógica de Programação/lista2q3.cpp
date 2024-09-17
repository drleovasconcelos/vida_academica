#include<stdio.h>
int main ()
{
	float numero, valor, num;
	printf ("Digite o numero: ");
	scanf ("%f", &numero);
	valor = numero - (int)numero;
	num = numero - valor;
	if (valor > 0.5)
	{
		printf ("%d", num+1);
	}
	else
	{
		printf ("%d", num-1);
	}
}
