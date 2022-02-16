Algoritmo "problema_aprovados"

//VETORES

Var

n, i, alunos : inteiro
media : real
vetA : vetor [0..9] de real
vetB : vetor [0..9] de caractere
vetC : vetor [0..9] de real

Inicio

escreva("Quantos alunos serão digitados? ")
leia(n)

 para i de 0 ate n-1 faca
  escreval("Digite o nome, primeira e segunda nota do aluno:")
   leia(vetB[i])
   leia(vetA[i])
   leia(vetC[i])
 fimpara
 
 escreval
 escreval("ALUNOS APROVADOS:")
 
 para i de 0 ate n-1 faca
  se (vetA[i] > 0) e (vetC[i] > 0) entao
  media <- (vetA[i] + vetC[i]) / 2
  alunos <- i
  fimse

   se media >= 6 entao
   escreval(vetB[alunos])
   fimse
 fimpara




Fimalgoritmo
