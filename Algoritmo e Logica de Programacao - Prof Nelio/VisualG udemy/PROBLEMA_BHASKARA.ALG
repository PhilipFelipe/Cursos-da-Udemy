Algoritmo "problema_bhaskara"

Var

 a, b, c, x1, x2, delta : real

Inicio

escreva("Coeficiente a: ")
leia(a)
escreva("Coeficiente b: ")
leia(b)
escreva("Coeficiente c: ")
leia(c)

  delta <- (b^2) - 4.0 * a * c

  se (delta < 0) entao
   escreva("Esta equação não possui raízes reais!")
  senao
    x1 <- (-b + raizq(delta)) / (2.0 * a)
    x2 <- (-b - raizq(delta)) / (2.0 * a)
    escreval("x1 = ", x1:4:4)
    escreval("x2 = ", x2:4:4)
  fimse



Fimalgoritmo


