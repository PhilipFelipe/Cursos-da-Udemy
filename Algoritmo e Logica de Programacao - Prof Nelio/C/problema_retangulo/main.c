#include <stdio.h>

double main() {


  double area, p, base, alt, diag;

  printf("Qual a base do retangulo? ");
  scanf("%lf", &base);
  printf("Qual a altura do retangulo? ");
  scanf("%lf", &alt);

  area = base * alt;
  p = 2*(base + alt);
  diag = pow(base, 2)+pow(alt, 2);
  diag = sqrt(diag);


  printf("\nAREA: %.4lf\n", area);
  printf("PERIMETRO: %.4lf\n", p);
  printf("DIAGONAL: %.4lf", diag);






    return 0;

}
