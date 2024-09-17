/*Elabore um algoritmo que leia dois
inteiros e inverta os valores dos mesmos*/
#include<stdio.h>
int main()
{
	int x, y, aux;
	printf("Digite o valor de x: ");
	scanf("%d", &x);
	printf("Digite o valor de y: ");
	scanf("%d", &y);
	aux = x;
	x = y;
	y = aux;
	printf("x = %d e y = %d", x, y);
}
