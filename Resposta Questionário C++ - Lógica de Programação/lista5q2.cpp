/*Elabore um algoritmo que receba as notas escolares de 
uma turma, armazene essas informações em um vetor e calcule 
a média da turma. O algoritmo deve também determinar quantos 
alunos obtiveram nota maior que a média da turma.*/

#include<stdio.h>
int main ()
{
	int i, tam = 5;
	float notas [tam], media, soma = 0;

	for (i = 0; i < tam; i++)
	{
		printf ("Digite a nota: ");
		scanf ("%f", &notas[i]);
	}

	media = notas[0];
	for (i = 0; i < tam; i++)
	{
		soma = soma + notas [i];
	}
	media = soma / tam;
	printf ("%f", media);
}
