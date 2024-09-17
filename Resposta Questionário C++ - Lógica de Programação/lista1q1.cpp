
// biblioteca stdio.h - quarda as funçoes que podem ser utilizadas
#include<stdio.h>  //se salvar como c++ precisa cadastrar em biblioteca, e sempre deve ser colocado no início
int main ()
{
	// DECLARAÇÃO DE VARIÁVEIS 
	// -> COMENTÁRIO DE 1 LINHA --> /*   */ COMENTÁRIO DE VÁRIAS LINHAS
	int n1, n2;
	printf("Digite o numero: ");
	scanf("%d",&n1);   // & = operador de referência que sempre é usado no scanf
	printf("Digite o numero: ");
	scanf("%d",&n2);
	printf("soma = "); // função para aparecer o comando na tela do computador
	printf("%d",n1+n2); // precisa indicar o tipo (int / float / char)	
}

/* sacnf("%d", n1); permite que o usuário mude o valor de n1*/
