/*Elabore uma fun��o que receba um n�mero inteiro, calcule e retorne o algarismo da
casa das unidades desse n�mero. Elabore tamb�m uma fun��o principal (main) para
mostrar no v�deo o retorno da fun��o*/

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
