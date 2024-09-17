/*Elabore uma função que receba 3 (três) valores numéricos, 
calcule e retorne a média aritmética destes valores. 
Elabore também uma função principal (main) para mostrar
no vídeo o retorno da função.
Media aritmética = n1 + n2 + n3 / 3
*/
#include<stdio.h>
int mediaarit (int n1, int n2, int n3)
{
	float media;
	media = (n1 + n2 + n3) / 3;
	return media;
}


int main ()
{
	float n1, n2, n3, media;
	printf ("Digite n1: ");
	scanf ("%f", &n1);
	printf ("Digite n2: ");
	scanf ("%f", &n2);
	printf ("Digite n3: ");
	scanf ("%f", &n3);
	media = mediaarit (n1, n2, n3);
	printf ("Media = %f", media);
}






/*
#include<stdio.h>
float media (float n1, float n2, float n3)
{
	float media;
	media = (n1 + n2 + n3)/3;
	return media;
}


int main ()
{
	float n1, n2, n3, med;
	printf ("Digite o primeiro valor: ");
	scanf ("%f", &n1);
	printf ("Digite o segundo valor: ");
	scanf ("%f", &n2);
	printf ("Digite o terceiro valor: ");
	scanf ("%f", &n3);
	med = media (n1, n2, n3);
	printf ("Media: %f", med);
}*/
