#include<stdio.h>

int media (float a, float b)
{
	float media;
	media = (a+b)/2;
	return media;
}
int main ()
{
	float nota1, nota2, med;  
	printf("Digite a AV1: "); 
	scanf("%f", &nota1);
	printf("Digite a AV2: ");
	scanf("%f", &nota2);
	med = media (nota1, nota2);
	printf ("Media: %f", med);
}
