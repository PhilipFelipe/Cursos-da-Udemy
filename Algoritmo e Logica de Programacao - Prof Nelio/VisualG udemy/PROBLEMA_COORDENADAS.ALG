Algoritmo "problema_coordenadas"


Var

x, y : real
quadrante : caractere

Inicio

escreva("Valor de x: ")
leia(x)
escreva("Valor de y: ")
leia(y)

se (x > 0) e (y > 0) entao
 quadrante <- "Q1"
 escreva(quadrante)
 senao
  se (x = 0) e (y = 0) entao
 quadrante <- "Origem"
 escreva(quadrante)
  senao
   se (x > 0) e (y < 0) entao
   quadrante <- "Q4"
   escreva(quadrante)
    senao
     se (x < 0) e (y > 0) entao
     quadrante <- "Q2"
     escreva(quadrante)
      senao
      se (x < 0) e (y < 0) entao
      quadrante <- "Q3"
      escreva(quadrante)
       senao
        se (x > 0) e (y = 0) entao
       quadrante <- "Eixo X"
       escreva(quadrante)
        senao
         se (x = 0) e (y > 0) entao
       quadrante <- "Eixo Y"
       escreva(quadrante)
         fimse
        fimse
      fimse
     fimse
   fimse
  fimse
fimse








Fimalgoritmo


