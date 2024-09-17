/*Elabore um algoritmo que preencha um vetor de números inteiros e o 
decomponha em dois outros vetores, um contendo os
 elementos de valor ímpar e o outro contendo os elementos de valor par. 
Por exemplo, se o vetor dado for (3, 5, 6, 8, 1, 4, 2, 3, 7) 
o algoritmo deve gerar os vetores (3, 5, 1, 3, 7) e (6, 8, 4, 2).*/

#include<stdio.h>
int main ()
{
	int i = 0, j = 0, z = 0;
	int v1[9], v2[5], v3[4];
	for (i = 0; i < 9; i = i + 1)
	{
		printf ("Digite o valor: ");
		scanf ("%d", &v1[i]);
	}
	printf("O vetor principal: "); // por for ser uma estrutura de repetição, melhor que coloque antes
	for (i = 0; i < 9; i = i + 1)
	{
		printf ("{%d}", v1[i]);
	}
	//dividir
	
	for (i = 0; i < 9; i = i + 1)
	{
		if (v1[i] % 2 == 0)
		{
			v3[z] = v1[i];
			z = z + 1;
		}
		else 	
		{
			v2[j] = v1[i];
			j = j + 1;
		}
	}
	printf("\n");
	printf("O vetor com numeros impares eh: ");
	
	for(i=0;i<5;i=i+1)
	{
		printf("[%d]",v2[i]);
		
	}
	printf("\n");
	printf("O vetor com numeros pares eh: ");
	for(i=0;i<4;i=i+1)
	{
		printf("[%d]",v3[i]);
	}
	return 0;
	
}
