/*Um eletricista precisa comprar fio que ir� passar, pelo telhado, por toda a diagonal
de uma casa de formato retangular. Como ele n�o tem condi��es de medir a
diagonal com precis�o a solu��o que ele encontrou foi medir os lados da casa,
sabendo que a diagonal pode ser calculada com base nos lados pelo Teorema de
Pit�goras (a2
= b2
+ c2
). Leia os valores dos lados da casa em metros e fa�a um
programa que calcule a quantidade m�nima necess�ria de fio a ser comprada com
precis�o de cent�metros.*/

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
