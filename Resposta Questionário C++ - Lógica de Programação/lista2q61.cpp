/* Escrever um programa que l� dois n�meros e efetua uma divis�o, mas somente se o
divisor for diferente de zero; quando isto ocorrer, � mostrada uma mensagem de erro
apropriada.*/

/*

= igual atribui��o
== igual compara��o
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
		printf ("N�o pode dividir");
	}
	else
	{
		quociente = dividendo/divisor;
		printf ("Valor do quociente e: %d ", quociente);
	}
}


