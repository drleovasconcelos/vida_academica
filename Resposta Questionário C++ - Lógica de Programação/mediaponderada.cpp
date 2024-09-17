#include<stdio.h> 
int main ()
{
	float n1, n2, n3, n4,media;
	printf ("Nota 1: ");
	scanf ("%f", &n1);
	printf ("Nota 2: ");
	scanf ("%f", &n2);
	printf ("Nota 3: ");
	scanf ("%f", &n3);
	printf ("Nota 4: ");
	scanf ("%f", &n4);
	media = n1+n2*2+n3*3+n4*4/10.0;
	printf ("Média = %f", media-1);

}

