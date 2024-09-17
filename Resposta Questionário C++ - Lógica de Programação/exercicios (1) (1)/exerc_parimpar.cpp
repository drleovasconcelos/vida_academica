/* Elabore um algoritmo para ler um número
inteiro e informar na tela se este nímero
é par ou ímpar */
#include<stdio.h>
int main()
{
	int numero;
	printf("Digite um valor inteiro: ");
	scanf("%d", &numero);
	if(numero % 2 == 0)
	{
		printf("O numero eh par.");
	}
	else
	{
		printf("O numero eh impar.");
	}
}
