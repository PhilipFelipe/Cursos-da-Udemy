Algoritmo "problema_cada_linha"

//MATRIZES

Var

n, i, j : inteiro
mat : vetor [0..9, 0..9] de real
vet : vetor [0..9] de real
maior : real

Inicio

escreva("Qual a ordem da matriz? ")
leia(n)


para i de 0 ate n-1 faca
 para j de 0 ate n-1 faca
  escreva("Elemento [", i, ",", j, "]= ")
   leia(mat[i, j])
 fimpara
fimpara
 
 
 para i de 0 ate n-1 faca
  vet[i] <- mat[i, 0]
  para j de 0 ate n-1 faca
   se vet[i] < mat[i,j] entao
   vet[i] <- mat[i,j]
   fimse
  fimpara
 fimpara

escreval
escreval("MAIOR ELEMENTO DE CADA LINHA:")
para i de 0 ate n-1 faca
 escreval(vet[i])
fimpara


Fimalgoritmo