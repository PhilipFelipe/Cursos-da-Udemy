Algoritmo "problema_soma_vetor"

//VETORES

Var

 i, n : inteiro
 soma, media : real
 vet : vetor [0..9] de real

Inicio

 escreva("Quantos números você vai querer digitar: ")
 leia(n)
 
 soma <- 0
 
 para i de 0 ate n-1 faca
   escreva("Digite um numero: ")
   leia(vet[i])
   soma <- soma + vet[i]
   media <- soma / n
 fimpara
 
  escreval
  escreva("VALORES: ")
 para i de 0 ate n-1 faca
  escreva(vet[i]:3:1, "  ")
 fimpara
 
  escreval
  escreval("SOMA =", soma:4:2)
  escreval("MEDIA =", media:4:2)






Fimalgoritmo