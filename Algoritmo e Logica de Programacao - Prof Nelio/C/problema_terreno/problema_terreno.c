#include <stdio.h>

void main() {

  double largura, comprimento, valor, area, preco;

  printf("Digite a largura do terreno: ");
  scanf("%lf", &largura);

  printf("Digite o comprimento do terreno: ");
  scanf("%lf", &comprimento);

  printf("Digite o valor do metro quadrado: ");
  scanf("%lf", &valor);

  area = largura * comprimento;
  preco = valor * area;

  printf("Area do terreno = %.2lf\n", area);
  printf("Preco do terreno = %.2lf\n", preco);



 return 0;



}
