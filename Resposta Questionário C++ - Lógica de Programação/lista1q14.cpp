/*O Teorema de Pit�goras estabelece a seguinte rela��o �Em qualquer tri�ngulo
ret�ngulo, o quadrado da hipotenusa � igual � soma dos quadrados dos catetos�. Crie
um programa para ler os valores da hipotenusa e dos catetos e identificar se o
tri�ngulo � ou n�o ret�ngulo.*/

#include<stdio.h>
int main ()
{
	int x, hipotenusa, ladoa, ladob;
	printf ("Digite a Hipotenusa: ");
	scanf ("%d", &hipotenusa);
	printf ("Digite a Lado A: ");
	scanf ("%d", &ladoa);
	printf ("Digite a Lado B: ");
	scanf ("%d", &ladob);
	
	if ((hipotenusa * hipotenusa) - (ladoa*ladoa) + (ladob*ladob) == 0)
	{
		printf ("triangulo e retangulo");
	}
	else
	{
		printf ("nao e triangulo retangulo");
	}
}
