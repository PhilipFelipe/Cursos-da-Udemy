Algoritmo "problema_soma_impares"


//ESTRUTURA PARA

Var

      x, y, soma, i : inteiro

Inicio

 escreval("Digite dois números:")
 leia(x)
 leia(y)

 soma <- 0

  para i de x ate y faca
    se (i > x) e  (i < y) e (i % 2 <> 0) entao
     soma <- soma + i
    fimse
  fimpara

  para i de x ate y passo -1 faca
   se (i < x) e  (i > y) e (i % 2 <> 0) entao
     soma <- soma + i
    fimse
  fimpara
  
  
   escreval("SOMA DOS ÍMPARES =", soma)


Fimalgoritmo


