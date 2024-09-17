/*Elabore um programa que lê os nomes e as notas de três alunos e informa na tela
qual aluno tirou a maior nota, qual aluno tirou a nota do meio e qual aluno tirou a
menor nota.*/

#include<stdio.h>
int main ()
{
	int nomea, nomeb, nomec, notaa, notab, notac, guardar_maior, guardar_menor, numero, guarda_meio;
	printf ("Digite o NomeA: ");
	scanf ("%d", &nomea);
	printf ("Digite o NomeB: ");
	scanf ("%d", &nomeb);
	printf ("Digite o NomeC: ");
	scanf ("%d", &nomec);
	printf ("Digite o NotaA: ");
	scanf ("%d", &notaa);
	printf ("Digite o NotaB: ");
	scanf ("%d", &notab);
	printf ("Digite o NotaC: ");
	scanf ("%d", &notac);
	nomea = notaa;
	nomeb = notab;
	nomec = notac;
	
	if(numero>guarda_maior)
 	guarda_maior=notaa;
 	
	else if(numero<guarda_menor)
 	guarda_menor=nota;
 	
	else if (guarda_menor < nota < guarda_maior) 
 	guarda_meio=nota;
	
 	
	printf("\nO menor numero entrado e: %d", guarda_menor);
 	printf("\nO menor numero entrado e: %d", guarda_meio);
	printf("\nO maior numero entrado e: %d", guarda_maior);
}	
