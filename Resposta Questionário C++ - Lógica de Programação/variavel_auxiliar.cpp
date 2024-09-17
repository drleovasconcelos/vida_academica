#include<stdio.h>
int main()
{
	int x, y, aux;
	printf("Digite valor de x: ");
	scanf("%d",&x);
	printf("Digite valorde y: ");
	scanf("%d",&y);
	aux = x;
	x = y;
	y = aux;
	printf("x = %d e y = %d", x, y);    // não posso esquecer de encerrar com ;
	
}
