/*Elabore uma fun��o que receba um n�mero com 2 (dois) 
algarismos, calcule e retorne o algarismo da casa das 
dezenas desse n�mero. Elabore tamb�m uma fun��o
principal (main) para mostrar no v�deo o retorno da fun��o.*/


#include<stdio.h>
int dezena (int n)
{
	int dez;
	dez = n/10;
	return dez; 	
}

int main ()
{
	int n, dez1;
	printf ("Digite o numero: ");
	scanf ("%d", &n);
	dez1 = dezena (n);
	printf ("Valor da dezena eh: %d", dez1);
}

