/*Elabore um algoritmo que preencha um vetor de números inteiros e o 
decomponha em dois outros vetores, um contendo os elementos de 
índice ímpar e o outro contendo os elementos de índice (posição) par. 
Por exemplo, se o vetor dado for (3, 5, 6, 8, 1, 4, 2, 3, 7) 
o algoritmo deve gerar os vetores (3, 6, 1, 2, 7) e (5, 8, 4, 3).*/

//indice = posição 

#include<stdio.h>
int main ()
{
	int i, j = 0, z=1; 
	int num[9], impar[5], par[4];
	
	
	//Preenchimento do vetor
	for (i = 0; i < 9; i++)
	{
		printf ("Digite o vetor principal: ");
		scanf  ("%d", &num[i]);
	}
	
	//Impressão dos valores do vetor
	printf ("\nO valor do vetor: ");
	for (i = 0; i < 9; i++)
	{
		printf ("{%d}", num[i]);
	}
	
	//vetor impar (5 valores)
	for(i = 0; i < 5; i++)
	{
		impar[i] = num[j]; // o j passa a assumir uma posição dentro do primeiro vetor, no qual parte da posição 0 ====> [0] = [0] / quando for para o segundo
		// [1] = [2] // [2] = [4]
		j=j+2;
	}
	
	//Impressão dos valores do vetor impares
	printf ("\nOs vetores impares: ");
	for (i = 0; i < 5; i++)
	{
		printf ("{%d}", impar[i]);
	}
	
	//vetor par (5 valores)
	for(i = 0; i < 4; i++)
	{
		par[i] = num[z];
		z=z+2;
	}
	
	//Impressão dos valores do vetor pares
	printf ("Os vetores pares: ");
	for (i = 0; i < 4; i++)
	{
		printf ("{%d}", par[i]);
	}
}
