Algoritmo "problema_media_pares"

//VETORES

Var

media, soma, npar : real
n, i : inteiro
vet : vetor [0..9] de real


Inicio

   escreva("Quantos elementos vai ter o vetor? ")
   leia(n)
   
   para i de 0 ate n-1 faca
    escreva("Digite um n�mero: ")
    leia(vet[i])
   fimpara
   
soma <- 0
npar <- 0
   para i de 0 ate n-1 faca
    se vet[i] % 2 = 0 entao
     soma <- soma + vet[i]
     npar <- npar + 1
    fimse
   fimpara
   
   media <- soma / npar
   
   escreva("M�DIA DOS PARES: ", media:3:1)
    






Fimalgoritmo
