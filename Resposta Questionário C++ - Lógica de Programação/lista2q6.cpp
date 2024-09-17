/*Escrever um programa que lê dois números e efetua uma divisão, mas somente se o 
divisor for diferente de zero; quando isto ocorrer, é mostrada uma mensagem de erro 
apropriada. */

#include<stdio.h>
int main ()
{
	int n1, n2, q;
	printf("Digite o dividendo: ");
	scanf("%d", &n1);
	printf("Digite o divisor: ");
	scanf("%d", &n2);
	
	if(n2 !=0);
	{
		n1 = n1/n2;
		printf ("O quociente = %d.", q);
	}
	else
	{
		
	}
}
