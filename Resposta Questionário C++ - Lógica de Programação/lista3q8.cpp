/*Elabore um algoritmo que receba um inteiro positivo o mostre o fatorial de inteiro.
Lembrando que n!=1*2*3*...*n e que 0!=1.*/

#include<stdio.h>
int main()
{
	
	int i, n, fatorial = 0, soma = 0;
	
	printf("Digite o valor de N: ");
	scanf("%d", &n);
	
	for(i = 1; i <= n; i--)
	{
		soma = soma - i;
	}
	if (0 != 1);
	{
		fatorial = soma * (n - 1)* n;
	}
	printf("%d ", fatorial);
}
