Algoritmo "problema_mais_velho"

//VETORES

Var

maisvelho : real
n, i, nome : inteiro
vetA : vetor [0..9] de real
vetB: vetor [0..9] de caractere

Inicio

 escreva("Quantas pessoas você vai digitar? ")
 leia(n)
 
 para i de 0 ate n-1 faca
  escreval("Dados da", i+1, "a pessoa")
  escreva("Nome: ")
  leia(vetB[i])
  escreva("Idade: ")
  leia(vetA[i])
 fimpara
 
 maisvelho <- vetA[0]
  para i de 0 ate n-1 faca
   se vetA[i] > maisvelho entao
    maisvelho <- vetA[i]
    nome <- i
   fimse
  fimpara
  
  escreva("PESSOA MAIS VELHA: ", vetB[nome])

 
 


Fimalgoritmo
