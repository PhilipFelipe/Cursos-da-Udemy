#include <stdio.h>
#include <stdlib.h>

int main()
{
    int n, i;

    printf("Quantos numeros você vai digitar? ");
    scanf("%d", &n);

    double vet[n];

    for (i = 0; i < n; i++) {
        printf("Digite um numero: ");
        scanf("%lf", &vet[i]);
    }

    for (i = 0; i < n; i++) {
        if (vet[i] < 0) {
            printf("\n%.2lf", vet[i]);
            printf("\n");
        }
    }









}
