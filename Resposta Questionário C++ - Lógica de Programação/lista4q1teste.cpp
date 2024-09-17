/*Elabore uma função que receba 2 (duas) notas de um aluno, calcule e retorne a
média do aluno utilizando a fórmula abaixo. Elabore também uma função principal
(main) para mostrar no vídeo o retorno da função.*/

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
