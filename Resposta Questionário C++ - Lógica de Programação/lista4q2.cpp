/*Elabore uma fun��o que receba o seu sal�rio, o desconto 
de um funcion�rio; calcule e retorne o sal�rio l�quido do
funcion�rio. Elabore tamb�m uma fun��o principal
(main) para mostrar no v�deo o retorno da fun��o.
Sal�rio liquido = sal�rio � desconto
*/
//void - n�o retorna nada

#include<stdio.h>
float sal_liq (float salario, float desconto)
{
	float sal_liq;
	sal_liq = salario - desconto;
	return sal_liq;
}

int main ()
{
	float salario, desconto, salario_liquido;
	printf ("Digite o sal�rio: ");
	scanf ("%f", &salario);
	printf ("Digite o desconto: ");
	scanf ("%f", &desconto);
	salario_liquido = sal_liq (salario, desconto);
	printf ("%f", salario_liquido);
	
}


/*

#include<stdio.h>
float salario_liquido (float salario, float desconto)
{
	return salario - desconto;
}

int main ()
{
	float ret, salario, desconto;
	printf ("Digite o salario: ");
	scanf ("%f", &salario);	
	printf ("Digite o desconto: ");
	scanf ("%f", &desconto);
	ret = salario_liquido (salario, desconto); //retorna o nome da fun��o;
	printf("Valor do Salario Liquido: %f", ret);
}




/*
#include<stdio.h>
float descontar (float salario, float desconto)
{
	float res;
	res = salario - desconto;
	return res; // esse valor � apresentado no nome da fun��o;
}
	
int main ()
{
	float calc, ret, salario, desconto;
	printf ("Digite o salario: ");
	scanf ("%f", &salario);	
	printf ("Digite o desconto: ");
	scanf ("%f", &desconto);
	ret = descontar (salario, desconto); //retorna o nome da fun��o;
	printf("Valor do Salario Liquido: %f", ret);
	
}
*/
