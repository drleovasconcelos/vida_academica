/* Elabore um algoritmo que receba dois números ponto-flutuante e verifique se a parte
inteira ou a parte fracionária ou ambas as partes são iguais nesses números. */

#include<stdio.h>
int main ()
{
	float n1, n2, unidadea, unidadeb, fracaoa, fracaob;
	printf("Digite o numero 1: ");
	scanf("%f", &n1);
	printf("Digite o numero 2: ");
	scanf("%f", &n2);
	unidadea = n1/10.0;
	unidadeb = n2/10.0;
	fracaoa = n1 - (int)n1;
	fracaob = n2 - (int)n2;
	if (unidadea == unidadeb)
	{
		printf ("a parte unitaria e igual");
	}
	if (fracaoa == fracaob)
	{
		printf ("A parte fracionaria e igual");
	}
	else
	{
		printf ("Nenhuma parte e igual");
	}

}
