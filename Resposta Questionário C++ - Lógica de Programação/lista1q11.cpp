/*Escreva um algoritmo que converta um intervalo de tempo dado em minutos para
um intervalo de tempo dado em horas, minutos e segundos. Exemplo:

c. Se a entrada for 145,87 min, o algoritmo deve fornecer como saída 2 h 25 min e 52,2 seg;*/

/*
#include<stdio.h>
int main ()
{
	int tempo, hora, minuto, segundo;
	printf ("Digite o valor do tempo: ");
	scanf ("%d", &tempo);
	hora = tempo / 60;
	minuto = tempo % 60;
	printf ("%d:%d", hora, minuto);
}
*/

#include<stdio.h>
int main ()
{
	int tempo, horas, minutos;
	float segundos;
	printf ("Digite o valor do tempo: ");
	scanf ("%d", &tempo);
	horas = tempo / 60;
	minutos = tempo % 60;
	tempo = tempo % 60;
	segundos = minutos - (int)minutos;
	printf ("%d: %d: %f", horas, minutos, segundos);
}
