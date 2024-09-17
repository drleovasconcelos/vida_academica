/* Elabore um algoritmo que receba as notas escolares de uma 
turma, armazene essas informações em um vetor e calcule a 
maior e a menor nota da turma. */

#include<stdio.h>
int main ()
{
	int i, tam = 10;
	float notas [tam], maior,posMaior, menor, posMenor;
	for (i = 0; i < tam; i++)
	{
		printf("Digite a nota do aluno: ");
		scanf("%f", &notas[i]);
	}
	//encontrar o maior
	maior = notas[0];
	posMaior = 0;
	for (i = 0; i < tam; i++)
	{
		if (notas[i] > maior)
		{
			maior = notas[i];
			posMaior = i;
		}
	}

	//encontrar o menor
	menor = notas[0];
	posMenor = 0;
	for (i = 0; i < tam; i++)
	{
		if (notas[i] < menor)
		{
			menor = notas[i];
			posMenor = i;
		}
	}
	printf("\nMaior: %f - Posição: %f", maior, posMaior+1);
	printf("\nMenor: %f - Posição: %f", menor, posMenor+1);
}

