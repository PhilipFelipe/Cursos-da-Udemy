Algoritmo "problema_alturas"

//VETORES

Var

idade, i, n, p : inteiro
altura, media, soma, percent, menor : real
nome : caractere
vet : vetor [0..9] de real
vet1 : vetor [0..9] de caractere
vet2 : vetor [0..9] de inteiro

Inicio

 escreva("Quantas pessoas serao digitadas? ")
 leia(n)

 p <- 0

 para i de 0 ate n-1 faca
 p <- p + 1
  escreval("Dados da", p, "a pessoa:")
  escreva("Nome: ")
  leia(nome)
  escreva("Idade: ")
  leia(idade)
  escreva("Altura: ")
  leia(altura)
  vet[i] <- altura
  vet1[i] <- nome
  vet2[i] <- idade
 fimpara

 
 

 soma <- 0
 para i de 0 ate n-1 faca
  soma <- soma + vet[i]
  media <- soma / n
 fimpara
 
 escreva("Altura média: ", media:2:2)

 escreval
 
 menor <- 0
  para i de 0 ate n-1 faca
   se vet2[i] < 16 entao
   menor <- menor + 1
   percent <- (menor * 100) / n
   fimse
  fimpara

  escreval("Pessoas com menos de 16 anos: ", percent:2:1, "%")

  para i de 0 ate n-1 faca
   se vet2[i] < 16 entao
    escreval(vet1[i])
   fimse
  fimpara


Fimalgoritmo
