/*Elabore um algoritmo que leia 10 números inteiros pelo teclado e mostre quantos
desses números estão no intervalo de 50 a 90.*/

// #include <stdio.h>
//
//int main()
//{
//
// 	int i, numero,guarda_menor, guarda_maior;
//
// 	for(i=1; i<100; i++)
// 	{
// 		printf("\nEntre com um numero inteiro: %d", i);
//	}
// 	if(numero > 10 && numero <= 50)
//  		{
//   		 printf("Esta no Intervalo");
//  		}
//	else 
//  		{
//   		 printf("Nao Esta no Intervalo");
//  		}
//}

#include <stdio.h>
int main()
{
 	int numero, q_intervalo = 0, i;

 	for(i=1; i<10; i++)
	{
 	printf("\nEntre com um numero inteiro: ");
 	scanf("%i", &numero);

  	if(numero >= 50 && numero <= 90)
  	{
    printf("Esta no Intervalo");
    q_intervalo = q_intervalo + 1;
  	}
	else 
  	{
    printf("Proximo numero");
    q_intervalo = q_intervalo + 0;
 	}

 	}

  	printf("\nQuantidade de numeros no intervalo: %i   ", q_intervalo);


}
