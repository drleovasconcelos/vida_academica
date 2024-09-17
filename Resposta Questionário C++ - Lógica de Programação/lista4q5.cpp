/*Elabore uma função que receba um número inteiro, calcule e retorne o algarismo da
casa das unidades desse número. Elabore também uma função principal (main) para
mostrar no vídeo o retorno da função*/

#include<stdio.h>
int unidade (int n)
{
	int unid;
	unid = n % 10;
	return unid;
}

int main ()
{
	int n, unid1;
	printf ("Digite o numero: ");
	scanf ("%d", &n);
	unid1 = unidade (n);
	printf("A unidade eh: %d", unid1);
}

/*
#include<stdio.h>
int unidade (int n, int calc)
{
	calc = n % 10;
	return calc;
}

int main ()
{
	int n_int, res;
	printf("Digite o valor: ");
	scanf("%d", &n_int);
	res = unidade (n_int);
	printf ("Valor da Unidade: %d", res);
}
*/
