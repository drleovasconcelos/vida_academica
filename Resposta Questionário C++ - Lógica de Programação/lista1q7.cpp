
#include<stdio.h>
int main ()
{
	float nota1, nota2, nota3, nota4, media;
	printf("Digite a nota 1: ");
	scanf ("%f", &nota1);
	printf("Digite a nota 2: ");
	scanf ("%f", &nota2);
	printf("Digite a nota 3: ");
	scanf ("%f", &nota3);
	printf("Digite a nota 4: ");
	scanf ("%f", &nota4);
	media = (nota1 + nota2*2 + nota3*3 + nota4*4)/10;
	printf ("Media: ");
	printf ("%f", (nota1 + nota2*2 + nota3*3 + nota4*4)/10);
}
