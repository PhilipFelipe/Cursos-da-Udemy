Algoritmo "problema_diagonal_negativos"

//MATRIZES


Var

n, i, j, negativos: inteiro
mat : vetor [0..9, 0..9] de real
vet : vetor [0..9] de real



Inicio

escreva("Qual a ordem da matriz? ")
leia(n)

 para i de 0 ate n-1 faca
  para j de 0 ate n-1 faca
   escreva("Elemento [", i, ",", j, "]: ")
   leia(mat[i, j])
  fimpara
 fimpara

//DIAGONAL PRINCIPAL:
 para i de 0 ate n-1 faca
  para j de 0 ate n-1 faca
   se i = j entao
    vet[i] <- mat[i, j]
   fimse
  fimpara
 fimpara
 
 
 negativos <- 0
 para i de 0 ate n-1 faca
  se vet[i] < 0 entao
  negativos <- negativos + 1
  fimse
 fimpara
 
 escreval
 escreval("DIAGONAL PRINCIPAL:")
  para i de 0 ate n-1 faca
 escreva(vet[i], " ")
  fimpara
 escreval
 escreva("QUANTIDADE DE NEGATIVOS = ", negativos)
 



Fimalgoritmo