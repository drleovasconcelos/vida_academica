#include<stdio.h>
int main ()
{
	int produto, entrada, parcelas, valor_das_parcelas;
	printf ("Digite o valor do produto: ");
	scanf ("%d", &produto);
	printf ("Digite o valor do entrada: ");
	scanf ("%d", &entrada);
	printf ("Digite o valor do parcelas: ");
	scanf ("%d", &parcelas);
	valor_das_parcelas = (produto - entrada)/parcelas;
	printf ("%d", valor_das_parcelas);
}
