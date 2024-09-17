/*Escreva um algoritmo que converta um intervalo de tempo dado em minutos para
um intervalo de tempo dado em horas, minutos e segundos. Exemplo:
a. Se a entrada for 87 min, o algoritmo deve fornecer como saída 1 h 27 min e 0
seg;
b. Se a entrada for 121,5 min, o algoritmo deve fornecer como saída 2 h 1 min e 30
seg;
c. Se a entrada for 145,87 min, o algoritmo deve fornecer como saída 2 h 25 min e
52,2 seg;*/

#include<stdio.h>
int main() //não deu certo, o que falta???
{
	int min, horas, minutos, restoHoras;
	float segundo;
	printf ("Digite as minutos: ");
	scanf ("%d", &min);

	horas = (min/60); 
	minutos = min%60;
	segundo = minutos*60;
	
	printf ("horas: %d:%d:%d", horas, minutos, segundo);	
}
