/*Elabore um algoritmo que some todos os múltiplos de 7 entre
105 e 999*/
#include<stdio.h>
int main()
{
	int i, soma = 0;
	for(i = 105; i <= 999; i = i + 7)
	{
		soma = soma + i;
	}
	printf("%d", soma);
}
