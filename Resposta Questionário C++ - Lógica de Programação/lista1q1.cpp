
// biblioteca stdio.h - quarda as fun�oes que podem ser utilizadas
#include<stdio.h>  //se salvar como c++ precisa cadastrar em biblioteca, e sempre deve ser colocado no in�cio
int main ()
{
	// DECLARA��O DE VARI�VEIS 
	// -> COMENT�RIO DE 1 LINHA --> /*   */ COMENT�RIO DE V�RIAS LINHAS
	int n1, n2;
	printf("Digite o numero: ");
	scanf("%d",&n1);   // & = operador de refer�ncia que sempre � usado no scanf
	printf("Digite o numero: ");
	scanf("%d",&n2);
	printf("soma = "); // fun��o para aparecer o comando na tela do computador
	printf("%d",n1+n2); // precisa indicar o tipo (int / float / char)	
}

/* sacnf("%d", n1); permite que o usu�rio mude o valor de n1*/
