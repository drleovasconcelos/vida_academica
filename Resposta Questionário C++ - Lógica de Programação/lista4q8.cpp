/* Elabore uma função que identifique se um determinado número n é primo.
A função deve receber o valor de n e retornar 1 se o número for primo ou
0 se o número não for primo. Elabore também uma função principal (main)
para mostrar no vídeo o retorno da função. */






/*
#include<stdio.h>
int primo (int n)
{
	int i;
	for (i = 2; i < n; i++) //começa com 2, pois já sabemos que o 1 e o n são divisíveis por ele mesmo;
	{
		if (n % i == 0) // se for divisível (n/i) não é primo
		{ 
			return 0; 
		}
	}
	return 1; // se o numero não for divisível, continua no loop até sair e vem para o ultimo return.
}

int main ()
{
	int n, resultado;
	printf ("Digite o numero: ");
	scanf ("%d", &n);
	resultado = primo (n);
	if (resultado == 1)
	{
		printf ("o numero %d eh primo", n);
	}
	else
	{
		printf ("o numero %d nao eh primo", n);
	}
}





/*
#include<stdio.h>
int primo(int n)
{
	int i;
	for(i = 2; i < n; i++)
	{
		if(n % i == 0)
		{
			return 0;
		}
	}
	return 1;
}

int primo2(int n)
{
	int i, count = 0;
	for(i = 1; i <= n; i++)
	{
		if(n % i == 0)
		{
			count++;
		}
	}
	
	if(count > 2)
	{
		return 0;
	}
	else
	{
		return 1;
	}
}

int main()
{
	int n, resultado;
	printf("Digite o valor de n: ");
	scanf("%d", &n);
	resultado = primo2(n);
	if(resultado == 1)
	{
		printf("O numero %d eh primo!", n);
	}
	else
	{
		printf("O numero %d nao eh primo!", n);
	}
}
*/
