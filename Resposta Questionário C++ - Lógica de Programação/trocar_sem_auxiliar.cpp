#include<stdio.h>
int main()
{
	int x, y;
	printf ("Digite valor de x = ");
	scanf ("%d", &x);
	printf ("Digite valor de y = ");
	scanf ("%d", &y);
	x = y - x;
	y = x - y;
	x = x - y;
	printf("x = %d e y = %d", x, y);
	
}

