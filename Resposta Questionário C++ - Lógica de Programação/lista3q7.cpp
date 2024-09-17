/*Elabore um algoritmo para realizar a soma da série abaixo até o n-ésimo termo,
onde n é definido pelo usuário. No exemplo abaixo, estão presentes os 4 primeiros
termos, mas o usuário pode informar outro valor qualquer inteiro positivo.
S = 1 – 2/32 + 3/52 – 4/72 + ....*/

#include<stdio.h>
int main ()
{
	float fracao, numerador = 2, soma = 0, denominador = 40;
	int i, n;
	printf ("Digite o numero: ");
	scanf ("%d", &n);
	for (i = 1; i <= n; i++)
	{
		fracao = numerador/denominador;
		soma = soma + fracao;
		
		if (i % 2 == 0)
		{
			numerador = numerador * 2;
			denominador = denominador + 40;
		}
		else
		{
			numerador = numerador * (-2);
			denominador = denominador + 40;
		}
		
	}
	printf ("%d", soma);
}
