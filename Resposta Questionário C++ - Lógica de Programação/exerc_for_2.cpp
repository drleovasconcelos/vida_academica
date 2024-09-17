/*Elabore um algoritmo que imprima na tela todos os múltiplos
de 7 entre 105 e 999*/
#include<stdio.h>
int main()
{
	int i;
	for(i = 105; i <= 999; i = i + 7)
	{
		printf("%d ", i);
	}
}
