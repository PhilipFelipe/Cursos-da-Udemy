#include <stdio.h>
#include <stdlib.h>

void ler_texto(char *buffer, int length) {
 fgets(buffer, length, stdin);
 strtok(buffer, "\n");
}

void limpar_entrada() {
 char c;
 while ((c = getchar()) != '\n' && c != EOF) {}
}



int main()
{
    int idade, idade1;
    char nome[50], nome1[50];
    double media;


    printf("Dados da primeira pessoa: \n");
    printf("Nome: ");
    ler_texto(nome, 50);
    printf("Idade: ");
    scanf("%d", &idade);

    printf("\nDados da segunda pessoa:\n");
    printf("Nome: ");
    limpar_entrada();
    ler_texto(nome1, 50);
    printf("Idade: ");
    scanf("%d", &idade1);

    media = (idade + idade1) / 2;


    printf("A idade media de %s e %s e de %.1lf anos", nome, nome1, media);






   return 0;
}
