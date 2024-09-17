/*Elabore um algoritmo que mostre as os elementos distintos de um vetor dado. 
Por exemplo, se o vetor dado for (3, 2, 1, 3, 4, 1, 5, 5, 2), o programa deve fornecer (3, 2, 1, 4, 5).*/

#include<stdio.h>
int main ()
{
	int i, j = 0;
	int v1[9];
	for (i = 0; i < 9; i = i + 1)
	{
		printf ("Digite o valor: ");
		scanf ("%d", &v1[i]);
	}
	printf ("Valores do Vetor: ");
	for (i = 0; i < 9; i = i + 1)
	{ 
		printf ("{%d}", v1[i]);
	}
	
	for (i = 0; i < 9; i = i + 1)
	{
		if (i == j)
		{
			if (v1[i] != v1[j]) 
			{
				printf ("{%d}", v1[j]);
			}
		}
	}

}
