/* Elabore um algoritmo para ler um n�mero
inteiro e informar na tela se este n�mero
� par ou �mpar */
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
