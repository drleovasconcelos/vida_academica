#include<stdio.h> 
int main()
{
	float F, C;
	printf("Temperatura em Fahrenheit= ");
	scanf("%f",&F);   //abrigar uma var��vel = &F
	C=5*(F-32)/9;    // tive que mudar a formula para dar certo
	printf("Celsius = %f", C);   //%d � onde estar� a vavi�vel C do tipo inteira
}

