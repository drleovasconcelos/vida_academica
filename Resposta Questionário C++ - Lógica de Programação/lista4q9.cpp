/*Elabore uma fun��o que calcule e retorne o n-�simo termo da s�rie da Finonacci, a qual � formada pelos valores: 1, 
1, 2, 3, 5, 8, 13, 21, 34, 55... Nesta s�rie, os dois  primeiros n�meros s�o 1 e os demais s�o calculados pela 
soma dos dois n�meros anteriores. A fun��o deve receber um n�mero n que representa o termo procurado e retornar o valor
desse termo. Se, por exemplo, o valor de n for 6, a fun��o deve retornar o 6� termo da s�rie, ou seja, o valor 8. Elabore 
tamb�m uma fun��o principal (main) para mostrar no v�deo o retorno da fun��o.*/

//n = n-1 + n+1

#include<stdio.h>
int termo (int n)
{
	int i, soma = 0;
	for (i = 1; i <= n; i++)
	{ 
		soma = (soma-1) + (soma+1); //como fazer???
	}
	return soma;
}
int main ()
{
	int n, valor;
	printf ("Digite o termo: ");
	scanf ("%d", &n);
	valor = termo (n);
	printf ("O termo eh: %d", valor);
}
