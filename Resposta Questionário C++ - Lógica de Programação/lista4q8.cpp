/* Elabore uma fun��o que identifique se um determinado n�mero n � primo.
A fun��o deve receber o valor de n e retornar 1 se o n�mero for primo ou
0 se o n�mero n�o for primo. Elabore tamb�m uma fun��o principal (main)
para mostrar no v�deo o retorno da fun��o. */






/*
#include<stdio.h>
int primo (int n)
{
	int i;
	for (i = 2; i < n; i++) //come�a com 2, pois j� sabemos que o 1 e o n s�o divis�veis por ele mesmo;
	{
		if (n % i == 0) // se for divis�vel (n/i) n�o � primo
		{ 
			return 0; 
		}
	}
	return 1; // se o numero n�o for divis�vel, continua no loop at� sair e vem para o ultimo return.
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
