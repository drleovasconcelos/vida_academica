/*Elabore um algoritmo que imprima na tela todos os múltiplos
de 7 entre a e b, onde a e b são lidos pelo teclado*/
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
		if(i % 7 == 0)
		{
			soma = soma + i;
		}
	}
	printf("%d", soma);
}
