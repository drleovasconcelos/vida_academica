/* Elabore um algoritmo que leia 2 inteiros
(a e b) e imprima na tela se a e b são
iguais, se a > b ou se b > a */
#include<stdio.h>
int main()
{
	int a, b;
	printf("Digite o valor de a: ");
	scanf("%d", &a);
	printf("Digite o valor de b: ");
	scanf("%d", &b);
	if(a == b)
	{
		printf("a e b sao iguais.");
	}
	else 
	{
		if(a > b)
		{
			printf("a eh maior que b.");
		}
		else
		{
			printf("a eh menor que b.");
		}
	}
}
