/*Elabore um algoritmo que receba as notas escolares de 
uma turma, armazene essas informa��es em um vetor e calcule 
a m�dia da turma. O algoritmo deve tamb�m determinar quantos 
alunos obtiveram nota maior que a m�dia da turma.*/

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
