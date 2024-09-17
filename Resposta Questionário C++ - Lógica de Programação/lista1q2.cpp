#include<stdio.h>
int main ()
{
	int salario, desconto, salario_liquido;
	printf ("Salario: ");
	scanf ("%d", &salario);
	printf ("Desconto: ");
	scanf ("%d", &desconto);
	printf ("Salario Liquido: ");
	printf ("%d",salario - desconto);
}
