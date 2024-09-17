/*Elabore um algoritmo que preencha um vetor de números inteiros e o decomponha em dois 
outros vetores, um contendo os elementos de valor ímpar e o outro contendo os elementos de valor par. 
Por exemplo, se o vetor dado for (3, 5, 6, 8, 1, 4, 2, 3, 7) o algoritmo deve gerar os vetores (3, 5, 1, 3, 7) e (6, 8, 4, 2).).*/

#include<stdio.h>
int main ()
{
	int i,j=0,k=0, vet[10],vetImpar[10],vetPar[10];
	for (i = 0; i < 10; i = i + 1)
	{
		printf("Digite o valor de vet: ");
		scanf("%d",&vet[i]);
	}
	for (i = 0; i <10; i++)
	{
		if ( vet[i]%2==0)
		{
			vetPar[j]=vet[i];
			j++;
		}
		else 
		{
			vetImpar[k]=vet[i];
			k++;
		}
	}
	for (i = 0; i < k; i++){
		printf("[%d]",vetImpar[i]);
	}
	printf("\n");
	for (i = 0; i < j; i++){
		printf("[%d]",vetPar[i]);
	}
}


