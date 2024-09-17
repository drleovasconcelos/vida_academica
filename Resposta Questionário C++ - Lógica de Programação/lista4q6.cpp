/*Elabore uma função que receba um número com 2 (dois) 
algarismos, calcule e retorne o algarismo da casa das 
dezenas desse número. Elabore também uma função
principal (main) para mostrar no vídeo o retorno da função.*/


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

