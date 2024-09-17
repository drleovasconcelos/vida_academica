#include<stdio.h> 
int main ()
{
	float salario, desconto, salario_liquido;
	printf("Digite o Salario: ");
	scanf ("%f", &salario);
	printf("Digite o Desconto: ");
	scanf ("%f", &desconto);
	salario_liquido = salario - desconto;
	printf("\nSalario Liquido = %f!",salario_liquido); // \n = pula a linha
	
	
	
// printf("%f", salario - desconto);
//salario - desconto
}
