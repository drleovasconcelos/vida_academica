/*Elabore uma função que calcule e retorne o n-ésimo termo da série da Finonacci, a qual é formada pelos valores: 1, 
1, 2, 3, 5, 8, 13, 21, 34, 55... Nesta série, os dois  primeiros números são 1 e os demais são calculados pela 
soma dos dois números anteriores. A função deve receber um número n que representa o termo procurado e retornar o valor
desse termo. Se, por exemplo, o valor de n for 6, a função deve retornar o 6º termo da série, ou seja, o valor 8. Elabore 
também uma função principal (main) para mostrar no vídeo o retorno da função.*/

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
