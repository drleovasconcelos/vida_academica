/* Escrever um programa que lê dois números e efetua uma divisão, mas somente se o
divisor for diferente de zero; quando isto ocorrer, é mostrada uma mensagem de erro
apropriada.*/

/*

= igual atribuição
== igual comparação
!=diferente
<= menor ou igual
>= maior ou igual 

*/

#include<stdio.h>
int main ()
{
	int dividendo, divisor, quociente;
	printf ("Digite o dividendo: ");
	scanf ("%f", &dividendo);
	printf ("Digite o divisor: ");
	scanf ("%f", &divisor);
	
	
	if (divisor == 0)
	{
		printf ("Não pode dividir");
	}
	else
	{
		quociente = dividendo/divisor;
		printf ("Valor do quociente e: %d ", quociente);
	}
}


