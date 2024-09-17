/*Elabore uma função em C/C++ que receba dois parâmetros inteiros a e b, 
calcule e retorne a soma de todos os números inteiros existentes entre a e b. 
Crie ainda uma função main para chamar para chamar e testar a função criada. 
Exemplo: se a função receber a=5 e b=12, ela precisa retornar 68=5+ 6+ 7+ 8+ 9+ 10+ 11+ 12*/

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
