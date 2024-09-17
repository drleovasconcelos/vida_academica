/*Um casal divide as despesas domésticas mensalmente. Durante o mês cada um anota
seus gastos e as contas que paga; no final eles dividem entre si com o homem
pagando 65% e a mulher pagando 35%. O casal deseja um programa que facilite o
acerto: eles digitariam os gastos de cada um, e o programa mostraria quem deve a
quem. Por exemplo, em um determinado mês o total gasto foi de 2.153,90 com o
marido pagando 1.278,60 e a esposa pagando 875,30. Escreva um programa que, a
partir dos valores que cada um gastou, calcule o valor que cada um deveria ter
gastado e informe o quanto ficou a diferença entre aquilo que foi efetuado.*/

#include<stdio.h>
int main ()
{
	float mulher, homem, total, diferencah, diferencam;
	printf ("Digite o total: ");
	scanf ("%f", &total);
	mulher = (total*35.0)/100;
	homem = (total*65.0)/100;
	diferencah = homem - 1278.60;
	diferencam = mulher - 875.30;
	printf ("Homem deveria ter gasto: %f ;", homem);	
	printf ("Mulher deveria ter gasto: %f ;", mulher);
	printf ("Diferença do Homem: %f ;", diferencah);
	printf ("Diferença da Mulher: %f ;", diferencam);
}
