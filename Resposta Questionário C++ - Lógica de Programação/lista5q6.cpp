/*A amplitude de uma rela��o de n�meros reais � a diferen�a entre o maior e o menor valor da rela��o. Por exemplo, 
a amplitude de 5, 7, 15, 2, 23, 21, 3, 6 � 23-2=21. Elabore um algoritmo recebe uma rela��o de n�meros e forne�a a sua amplitude.*/

#include<stdio.h>
int main ()
{
	int i, menor = 0, maior = 0, diferenca;
	int v1[8];
	for (i = 0; i < 8; i = i + 1)
	{
		printf ("Digite o valor: ");
		scanf ("%d", &v1[i]);
	}
	printf ("Valores do Vetor: ");
	for (i = 0; i < 8; i = i + 1)
	{ 
		printf ("{%d}", v1[i]);
	}
	//Identificar o maior e o menor
	
	maior = v1[0]; 
   	for (i = 0; i < 8; i = i + 1)
	{
		if (v1[i] > maior)
		{
			maior = v1[i];
		}
	}
	printf ("\nValores do maior: %d", maior);
	
	menor = v1[0];
	for (i = 0; i < 8; i = i + 1)
	{
		if (v1[i] < menor)
		{
			menor = v1[i];
		}
	}
	printf ("\nValores do menor: %d", menor);
		
	diferenca = maior - menor;
	printf ("\nQual a amplitude: %d", diferenca);
}
