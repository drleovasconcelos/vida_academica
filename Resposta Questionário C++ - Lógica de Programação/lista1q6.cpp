//Subtraímos a temperatura em ºF por 32 e dividimos o resultado por 1,8.
#include<stdio.h>
int main ()
{
	float Celsius, Fahrenheit;
	printf ("Digite a temperatura em Fahrenheit: ");
	scanf ("%f", &Fahrenheit);
	Celsius = 1.8 / (Fahrenheit - 32);
	printf ("Celsius: ");
	printf ("%f", (Fahrenheit - 32)/1.8);
}
