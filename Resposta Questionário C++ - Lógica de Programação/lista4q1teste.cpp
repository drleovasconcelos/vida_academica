/*Elabore uma fun��o que receba 2 (duas) notas de um aluno, calcule e retorne a
m�dia do aluno utilizando a f�rmula abaixo. Elabore tamb�m uma fun��o principal
(main) para mostrar no v�deo o retorno da fun��o.*/

#include<stdio.h>
int mediar (float a, float b)
{
	float media;
	media = (a + b) / 2;
	return media;
}



int main ()
{
	float a, b, media;
	printf ("Digite a primeira nota: ");
	scanf ("%f", &a);
	printf ("Digite a segunda nota: ");
	scanf ("%f", &b);
	media = mediar (a,b);
	printf ("Media = %f", media);	

}
