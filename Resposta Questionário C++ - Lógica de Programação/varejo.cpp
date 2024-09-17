#include<stdio.h>
int main ()
{
	int entrada, produto, parcelas, valorparcelas;
	printf("Digite o valor da entrada = ");
	scanf ("%d", &entrada);
	printf("Digite o valor da produto = ");
	scanf ("%d", &produto);
	printf("Numero de parcelas = ");
	scanf ("%d", &parcelas);
	valorparcelas = (produto - entrada)/parcelas;
	printf ("Valor das duas parcelas = %d, Entrada = %d",valorparcelas, entrada);
	//printf ("Valor do produto = %d, Valor da entrada = %d, Valor das parcelas = %d", produto, entrada, parcela; 
	
}
