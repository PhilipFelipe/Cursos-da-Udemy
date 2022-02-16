Algoritmo "problema_quadrante"


//ESTRUTURA EQUANTO

Var

 x, y : real
 qudrante : caractere

Inicio

escreval("Digite os valores das coordenadas x e y: ")
leia(X)
leia(y)

 enquanto (x > 0) e (y > 0) faca
   escreval("Qudrante Q1")
   escreval("Digite os  valors das coordenadas x e y: ")
   leia(x)
   leia(y)
 fimenquanto

 enquanto (x < 0) e (y < 0) faca
   escreval("Quadrante Q3")
   escreval("Digite os  valors das coordenadas x e y: ")
   leia(x)
   leia(y)
 fimenquanto

   enquanto (x > 0) e (y < 0) faca
   escreval("Qudrante Q4")
   escreval("Digite os  valors das coordenadas x e y: ")
   leia(x)
   leia(y)
 fimenquanto

   enquanto (x < 0) e (y > 0) faca
   escreval("Qudrante Q2")
   escreval("Digite os  valors das coordenadas x e y: ")
   leia(x)
   leia(y)
 fimenquanto

 se (x = 0) ou (y = 0) entao
   escreval("Eixo X ou Y")
 fimse




 
Fimalgoritmo


