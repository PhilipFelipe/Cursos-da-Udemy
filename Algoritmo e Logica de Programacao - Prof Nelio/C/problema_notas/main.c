#include <stdio.h>
#include <stdlib.h>

int main()
{
    double nota1, nota2, notaf;

    printf("Digite a primeira nota: ");
    scanf("%lf", &nota1);

    printf("Digite a segunda nota: ");
    scanf("%lf", &nota2);

    notaf = nota1 + nota2;

    if (notaf >= 60) {
        printf("\nNOTA FINAL: %.1lf\n", notaf);
        printf("APROVADO");
    }
    else {
         printf("\nNOTA FINAL: %.1lf\n", notaf);
         printf("REPROVADO");
    }






  return 0;
}
