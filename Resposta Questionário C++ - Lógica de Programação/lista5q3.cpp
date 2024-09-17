/*Elabore um algoritmo que armazene uma relação de números 
na ordem inversa da ordem original. Por exemplo, se a relação 
dada for (3, 5, 6, 8, 9) o programa deve armazenas 
(9, 8, 6, 5, 3).*/

// não entendi
#include<stdio.h>
int main ()
{
	int i, j = 4 , tam = 5;
	int vetOriginal[tam], vetInvertido[tam];

	//Preenchimento do vetor	
	for(i = 0; i < tam; i++)
	{
		printf("Digite o valor: ");
		scanf("%d", &vetOriginal[i]);
	}
	
	// vetOriginal[0], vetInvertido[3];
	// vetOriginal[1], vetInvertido[2];
	// vetOriginal[2], vetInvertido[1];
	// vetOriginal[3], vetInvertido[0];
	
	//Impressão dos valores do vetor
	for(i = 0; i < tam; i++)
	{
		printf("{%d}", vetOriginal[i]);
	}
	
	//Preenchendo o vetor vetInvertido
	for(i = 0; i < tam; i++)
	{
		vetInvertido[j] = vetOriginal[i];
		j--;
	}
	
	//Imprimindo o vetor 2
	for(i = 0; i < tam; i++)
	{
		printf("\n VetOriginal[%d] = %d, vetInvertido[%d] = %d", i , vetOriginal[i], i , vetInvertido[j] );
	}
	
	
	
	
	
	/*
	//Preenchendo o vetor v2
	for(i = 4, j = 0; i >= 0; i--, j++) 
	{
		vetInvertido[j] = vetOriginal[i];
	}
	
	//Imprimindo o vetor 2
	for(i = 0; i < 5; i++)
	{
		printf("\n[%d]", vetInvertido[i]);
	}
	*/
}

	
	
	
