/*Elabore um algoritmo para somar os 20 primeiros números conforme a sequência S
= 1 4 9 16 25 36 ... Dica: a expressão soma = soma + x aumenta o valor da
variável soma em x unidades.*/

#include<stdio.h>
int main ()
{
	int i, soma = 0;
	for (i=1; i<=20; i++)
	{
		soma = soma + i*i;
	}
	printf ("%d", soma);
	
}
