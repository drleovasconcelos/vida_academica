/* Elabore um algoritmo que receba 2 inteiros (a e b) de 2
algarismos e verifique se a unidade de a é igual à dezena de b
e vice-versa. Exemplo: 58 e 85. */
#include<stdio.h>
int main()
{
	int a, b, unida, unidb, deza, dezb;
	printf("Digite o valor de a: ");
	scanf("%d", &a);
	printf("Digite o valor de b: ");
	scanf("%d", &b);
	
	unida = a % 10;
	unidb = b % 10;
	deza = a / 10;
	dezb = b / 10;
	
	if(unida == dezb && unidb == deza)
	{
		printf("Sim!");
	}
	else
	{
		printf("Nao!");
	}
}
