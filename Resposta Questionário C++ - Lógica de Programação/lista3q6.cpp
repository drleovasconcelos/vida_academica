/*Elabore um algoritmo para somar os 20 primeiros n�meros conforme a sequ�ncia S
= 1 4 9 16 25 36 ... Dica: a express�o soma = soma + x aumenta o valor da
vari�vel soma em x unidades.*/

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
