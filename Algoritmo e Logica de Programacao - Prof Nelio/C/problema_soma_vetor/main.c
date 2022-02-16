#include <stdio.h>
#include <stdlib.h>

int main()
{
    int soma, cont, i, n;
    double media;

    printf("Quantos numeros voce vai digitar? ");
    scanf("%d", &n);

    double vet[n];

    for (i = 0; i < n; i++) {
        printf("\nDigite um numero: ");
        scanf("%lf", &vet[i]);
    }

    soma = 0;
    cont = 0;
    printf("\nVALORES = ");
    for (i = 0; i < n; i++) {
        soma = soma + vet[i];
        cont = cont + 1;
        printf("%.2lf, ", vet[i]);
    }

    media = soma / cont;

    printf("\nSOMA = %d", soma);
    printf("\nMEDIA = %.1lf", media);









}
