#include <stdio.h>
#include <math.h>

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
   int i, n, pos;
   double media, soma, cont1, porcento;



   printf("Quantas pessoas serao digitadas? ");
   scanf("%d", &n);

   double alt[n];
   char nome[n][50];
   int id[n];

   for (i = 0; i < n; i++) {
       pos = i+1;
       printf("\nDados da %da pessoa:\n", pos);

       printf("Nome: ");
       limpar_entrada();
       gets(nome[i]);

       printf("Idade: ");
       scanf("%d", &id[i]);

       printf("Altura: ");
       scanf("%lf", &alt[i]);
   }

   soma = 0;
    for (int i = 0; i < n; i++) {
        soma = soma + alt[i];
    }

     media = soma / n;
     printf("\nAltura media: %.2lf", media);

     cont1 = 0;
     printf("\nPessoas com menos de 16 anos: ");
     for (int i = 0; i < n; i++) {
        if (id[i] < 16) {
        cont1 = cont1 + 1;
        }
     }

     porcento = cont1 * 100.0 / n;

     printf("Pessoas com menos de 16 anos = %.1lf %%\n", porcento);



     return 0;


}
