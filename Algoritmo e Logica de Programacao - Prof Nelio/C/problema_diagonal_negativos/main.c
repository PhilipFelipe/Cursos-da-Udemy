#include <stdio.h>
#include <stdlib.h>

int main()
{
   int n, i, j, qntn;

   printf("Qual a ordem da matriz? ");
   scanf("%d", &n);

   int mat[n][n];


   for (i = 0; i < n; i++) {
     for (j = 0; j < n; j++) {
        printf("\nElemento [%d,%d]", i, j);
        scanf("%d", &mat[i][j]);
     }
   }

   printf("\nDIAGONAL PRINCIPAL:\n");
    for(i = 0; i < n; i++) {
        printf("%d ", mat[i][i]);
      }

   qntn = 0;
   for(i = 0; i < n; i++) {
    for(j = 0; j < n; j++) {
        if (mat[i][j] < 0) {
           qntn = qntn + 1;
        }
    }
   }

   printf("\nQUANTIDADE DE NEGATIVOS: %d", qntn);



   return 0;
}
