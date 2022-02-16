#include <stdio.h>
#include <math.h>

int main()
{
   double a, b, c, delta, x1, x2;

   printf("Coeficiente a: ");
   scanf("%lf", &a);

   printf("Coeficiente b: ");
   scanf("%lf", &b);

   printf("Coeficiente c: ");
   scanf("%lf", &c);

   delta = b * b - 4 * a * c;

   if (a == 0 || delta < 0) {
      printf("\nESTA EQUACAO NAO POSSUI RAIZES REAIS\n");
   }
   else {
      x1 = (-b + sqrt(delta)) / (2*a);
      x2 = (-b - sqrt(delta)) / (2*a);
      printf("\nx1 = %.4lf", x1);
      printf("\nx2 = %.4lf", x2);
   }





  return 0;
}
