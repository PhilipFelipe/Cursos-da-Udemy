Algoritmo "problema_abaixo_da_media"

//VETORES

Var

media, soma : real
n, i : inteiro
vet : vetor [0..9] de real


Inicio

escreva("Quantos elementos vai ter o vetor? ")
leia(n)

 para i de 0 ate n-1 faca
  escreva("Digite um n�mero: ")
  leia(vet[i])
 fimpara
 
 escreval
 
 soma <- 0
 para i de 0 ate n-1 faca
  soma <- soma + vet[i]
 fimpara
 
 media <- soma / n
 escreva("MEDIA DO VETOR =", media:3:3)
 
 escreval

escreval("ELEMENTOS ABAIXO DA M�DIA:")
 para i de 0 ate n-1 faca
  se vet[i] < media entao
   escreval(vet[i])
  fimse
 fimpara




Fimalgoritmo
