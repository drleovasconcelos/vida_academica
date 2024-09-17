#include<stdio.h>
int main ()
{
	int i;
	float notas[10], maior, menor;
	for (i = 0; i < 10; i++)
	{
		printf ("Digite a nota: ");
		scanf ("%f", &notas);
	}
	maior = notas [10];
	menor = notas [10];
	for (i = 0; i < 10; i++)
	{
		printf ("%d", notas);
	}
	printf ("Maior: %d", maior);
	printf ("Menor: %d", menor);
}
