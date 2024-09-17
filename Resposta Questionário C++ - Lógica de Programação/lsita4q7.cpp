/*Elabore uma função que calcule o fatorial de um número n. 
A função deve receber o valor de n, calcular e retornar o 
valor do fatorial. Elabore também uma função principal 
(main) para mostrar no vídeo o retorno da função.*/

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
