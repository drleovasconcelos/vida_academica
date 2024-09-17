/*Elabore uma função que receba 2 (duas) notas de um aluno, calcule e retorne a
média do aluno utilizando a fórmula abaixo. Elabore também uma função principal
(main) para mostrar no vídeo o retorno da função.
Média = nota da primeira prova + nota da segunda prova
2
*/

#include<stdio.h>

float media (float nota1, float nota2)
{
	float media;
	media = (nota1 + nota2)/2;
	return media;
}

int main ()
{	
	float nota1, nota2, calc;
	printf ("Digite nota da primeira prova: ");
	scanf ("%f", &nota1);
	printf ("Digite nota da segunda prova: ");	
	scanf ("%f", &nota2);
	calc = media (nota1, nota2);
	printf ("%f", calc);
}

