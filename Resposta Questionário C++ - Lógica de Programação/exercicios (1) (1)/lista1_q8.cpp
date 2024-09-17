/*Elabore um algoritmo que leia dois
inteiros e inverta os valores dos mesmos.
Sem usar variável auxiliar */
#include<stdio.h>
int main()
{
	int x, y;
	printf("Digite o valor de x: ");
	scanf("%d", &x);
	printf("Digite o valor de y: ");
	scanf("%d", &y);
	x = x + y;			//x = 38, y = 23
	y = x - y;			//x = 38, y = 15
	x = x - y;			//x = 23, y = 15;
	printf("x = %d e y = %d", x, y);
}
