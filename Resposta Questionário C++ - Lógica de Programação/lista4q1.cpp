/*Elabore uma fun��o que receba 2 (duas) notas de um aluno, calcule e retorne a
m�dia do aluno utilizando a f�rmula abaixo. Elabore tamb�m uma fun��o principal
(main) para mostrar no v�deo o retorno da fun��o.
M�dia = nota da primeira prova + nota da segunda prova
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

