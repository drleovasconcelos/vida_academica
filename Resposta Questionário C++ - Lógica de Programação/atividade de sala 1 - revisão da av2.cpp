/*Elabore uma fun��o em C/C++ que receba dois par�metros inteiros a e b, 
calcule e retorne a soma de todos os n�meros inteiros existentes entre a e b. 
Crie ainda uma fun��o main para chamar para chamar e testar a fun��o criada. 
Exemplo: se a fun��o receber a=5 e b=12, ela precisa retornar 68=5+ 6+ 7+ 8+ 9+ 10+ 11+ 12*/

#include<stdio.h>
	int somar (int a, int b)
{
	int i = 0, soma = 0;
	for (i = a; i <= b; i++)
	{
		soma = soma + i;
	}
	return soma;
}

int main ()
{
	int a, b, soma = 0;
	printf ("Digite valor de A: ");
	scanf ("%d", &a);
	printf ("Digite valor de B: ");
	scanf ("%d", &b);
	printf ("Valor da soma = %d", somar (a,b));
	
}
