#include <stdio.h>
#include <stdlib.h>

int main()
{
    int n, i, soma;

    printf("Deseja a tabuada para qual valor? ");
    scanf("%d", &n);



    for (i = 1; i <= 10; i++) {
        soma = 0;
        soma = n * i;
        printf("%d x %d = %d",n, i, soma);
        printf("\n");
    }













}
