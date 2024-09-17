//#include<stdio.h>
//int main ()
//{
//	float fracao, denominador = 3, numerador = 2, soma = 0;
//	int i, n;
//	printf ("Digite o numero: ");
//	scanf ("%d", &n);
//	
//	for (i = 1; i >= n; i++);
//	{
//		fracao = numerador/denominador;
//		soma = soma + fracao;
//				
//	}
//	printf ("Valor da soma: %f ", soma);
//}
//
//if (i % 2 = 0)
//			{
//			numerador = numerador * 2;
//			denaminador = denominador * 3;
//			}

#include<stdio.h>
int main ()
{
	float fracao, numerador = 1, denominador = 2, soma = 0;
	int i, n;
	printf ("Digite o numero: ");
	scanf ("%f", &n);
	
	for (i = 1 ; i <= n ; i++)
	{
		fracao = numerador/denominador;
		soma = soma + fracao;
	}
	if (i % 1 == 0)
	{
		numerador = numerador + 1.0;
		denominador = denominador + 1.0;
	}
	else
	{
		numerador = numerador - numerador - 1.0;
		denominador = denominador + 1.0;
	}
	printf ("%f", soma);
}
