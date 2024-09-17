/*elabore um algoritmo que leia um interior e imprima na tela o algoritimo */

#include<stdio.h>
int main()
{
	int numero, unidade, dezena, centena, resto, num_inv;
	printf("Digite o numero: ");
	scanf ("%d", &numero);
	unidade = numero% 10;
	dezena = (numero%100)/10;                //dezena = resto/10;//
	centena = numero/100;
	printf ("Valor da unidade: %d.", unidade);
	printf ("Valor da dezena: %d.", dezena);
	printf ("Valor da centena: %d.", centena);
	num_inv = (unidade*100)+ (dezena*10)+centena;
	printf ("\nValor invertido: %d.", num_inv);     // unidade *100 / dezena*10 / centena*1 => depois soma//
}
