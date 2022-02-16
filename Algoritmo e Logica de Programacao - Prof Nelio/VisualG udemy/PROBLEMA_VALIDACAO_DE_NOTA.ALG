Algoritmo "problema_validacao_de_nota"


//ESTRUTURA EQUANTO

Var

 nota1, nota2, media : real

Inicio


media <- 0

 escreva("Digite a primeira nota: ")
 leia(nota1)

 enquanto (nota1 < 0) ou (nota1 > 10) faca
  escreva("Valor inválido! Tente novamente: ")
  leia(nota1)
 fimenquanto
 
 escreva("Digite a segunda nota: ")
 leia(nota2)
 
 enquanto (nota2 < 0) ou (nota2 > 10) faca
  escreva("Valor inválido! Tente novamente: ")
  leia(nota2)
 fimenquanto
 
 media <- (nota1 + nota2) / 2
 
 escreva("Média =", media
 

Fimalgoritmo


