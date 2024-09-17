/*Escreva um algoritmo que receba como entrada um intervalo de tempo dado em
segundos e converta este valor para um intervalo de tempo dado em horas, minutos
e segundos. Exemplo:
a. Se a entrada for 5220 seg, o algoritmo deve fornecer como saída 1 h 27 min e 0 seg;
b. Se a entrada for 7290 seg, o algoritmo deve fornecer como saída 2 h 1 min e 30 seg;
c. Se a entrada for 8752,2 seg, o algoritmo deve fornecer como saída 2 h 25 min e 52,2 seg.*/

#include<stdio.h>
int main ()
{
	int tempo, horas, minutos;
	float segundos;
	printf ("Digite o valor do tempo: ");
	scanf ("%f", &tempo);
	horas = tempo / 3600;
	tempo = tempo % 3600;
	minutos = tempo / 60;
	tempo = tempo % 60;
	segundos = tempo % 60;
	printf ("%d: %d: %f", horas, minutos, segundos);
}
