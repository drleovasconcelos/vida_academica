/*Um eletricista precisa comprar fio que irá passar, pelo telhado, por toda a diagonal
de uma casa de formato retangular. Como ele não tem condições de medir a
diagonal com precisão a solução que ele encontrou foi medir os lados da casa,
sabendo que a diagonal pode ser calculada com base nos lados pelo Teorema de
Pitágoras (a2
= b2
+ c2
). Leia os valores dos lados da casa em metros e faça um
programa que calcule a quantidade mínima necessária de fio a ser comprada com
precisão de centímetros.*/

#include<stdio.h>
#include<math.h>
int main ()
{
	int a, a1, b, b1, c, c1, valor;
	printf ("Digite o numero B: ");
	scanf ("%d", &b);
	printf ("Digite o numero C: ");
	scanf ("%d", &c);
	c1 = c*c;
	b1 = b*b;
	a1 = (b1 + c1);
	a = sqrt(a1);
	valor = a*100;
	printf ("Valor a ser comprado: %d", valor);
	
	
}
