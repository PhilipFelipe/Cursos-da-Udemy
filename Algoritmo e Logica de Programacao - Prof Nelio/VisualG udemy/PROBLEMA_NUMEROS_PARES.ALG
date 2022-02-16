Algoritmo "problema_numeros_pares"

//VETORES

Var

n, x, i, qnt : inteiro
vet : vetor [0..9] de real

Inicio

escreva("Quantos números você vai digitar? ")
leia(n)

 para i de 0 ate n-1 faca
    escreva("Digite um número: ")
    leia(x)
    vet[i] <- x
 fimpara

escreval("NUMEROS PARES:")
 para i de 0 ate n-1 faca
  se vet[i] % 2 = 0 entao
   escreva(vet[i], "  ")
  fimse
 fimpara
 
 escreval
 escreval
 
 escreva("QUANTIDADE DE PARES: ")
 qnt <- 0
 para i de 0 ate n-1 faca
  se vet[i] % 2 = 0 entao
   qnt <- qnt + 1
  fimse
 fimpara

 escreva(qnt)

Fimalgoritmo
