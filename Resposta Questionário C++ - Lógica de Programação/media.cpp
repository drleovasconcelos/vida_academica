#include<stdio.h> 
int main ()
{
	int numero1, numero2, numero3;
	float media;
	printf("Digite numero1: ");
	scanf("%d", &numero1); 
	printf("Digite numero2: ");
	scanf("%d", &numero2); 
	printf("Digite numero3: ");
	scanf("%d", &numero3); 
	media = (numero1+numero2+numero3)/3.0; // para dar número quebrado é preciso trocar uma varíavel - ex = /3.0 
	printf("%f", (numero1+numero2+numero3)/3.0);
}
