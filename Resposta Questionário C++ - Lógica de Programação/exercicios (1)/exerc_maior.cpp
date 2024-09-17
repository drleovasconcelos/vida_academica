/* Elabore um algoritmo que leia 3 inteiros e
imprima na tela qual o maior desses 3. */
#include<stdio.h>
int main()
{
	int a, b, c;
	printf("Digite o valor de a: ");
	scanf("%d", &a);
	printf("Digite o valor de b: ");
	scanf("%d", &b);
	printf("Digite o valor de c: ");
	scanf("%d", &c);
	if(a > b && a > c)
	{
		printf("Maior : %d.", a);
	}
	else
	{
		if(b > a && b > c)
		{
			printf("Maior : %d.", b);
		}
		else
		{
			printf("Maior : %d.", c);
		}
	}
}
