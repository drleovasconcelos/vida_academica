/*Elabore uma fun��o que calcule o fatorial de um n�mero n. 
A fun��o deve receber o valor de n, calcular e retornar o 
valor do fatorial. Elabore tamb�m uma fun��o principal 
(main) para mostrar no v�deo o retorno da fun��o.*/

#include<stdio.h>
int fatorial (int n)
{
	int i, fato = 1;
	for (i = n; i > 1; i--)
	{
		fato = fato * i;
	}
	return fato;
}
	
int main ()
{
	int n, fat;
	printf ("Digite o numero: ");
	scanf ("%d", &n);
	fat = fatorial (n);
	printf ("Fatorial do numero: %d", fat);
}
