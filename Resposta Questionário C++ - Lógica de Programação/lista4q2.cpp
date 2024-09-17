/*Elabore uma função que receba o seu salário, o desconto 
de um funcionário; calcule e retorne o salário líquido do
funcionário. Elabore também uma função principal
(main) para mostrar no vídeo o retorno da função.
Salário liquido = salário – desconto
*/
//void - não retorna nada

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
	printf ("Digite o salário: ");
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
	ret = salario_liquido (salario, desconto); //retorna o nome da função;
	printf("Valor do Salario Liquido: %f", ret);
}




/*
#include<stdio.h>
float descontar (float salario, float desconto)
{
	float res;
	res = salario - desconto;
	return res; // esse valor é apresentado no nome da função;
}
	
int main ()
{
	float calc, ret, salario, desconto;
	printf ("Digite o salario: ");
	scanf ("%f", &salario);	
	printf ("Digite o desconto: ");
	scanf ("%f", &desconto);
	ret = descontar (salario, desconto); //retorna o nome da função;
	printf("Valor do Salario Liquido: %f", ret);
	
}
*/
