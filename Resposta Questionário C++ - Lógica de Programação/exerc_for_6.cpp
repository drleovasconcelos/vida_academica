/*Elabore um algoritmo que calcule e imprima na tela a soma
dos quadrados de todos os valores inteiros entre a e b, onde
a e b são lidos pelo teclado*/
#include<stdio.h>
int main()
{
	int i, a, b, soma = 0;
	
	printf("Digite o valor de a: ");
	scanf("%d", &a);
	printf("Digite o valor de b: ");
	scanf("%d", &b);
	
	for(i = a; i <= b; i++)
	{
		soma = soma + i*i;
	}
	printf("%d", soma);
}
