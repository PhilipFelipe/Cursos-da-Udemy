Algoritmo "problema_divisao"


//ESTRUTURA PARA

Var

 x, y, divisao : real
 i, n : inteiro


Inicio


escreva("Quantos casos voc� vai digitar? ")
leia(n)

 para i de 1 ate n faca
  escreva("Entre com o numerador: ")
  leia(x)
  escreva("Entre com o denominador: ")
  leia(y)
   se (x <> 0) e (y <> 0) entao
    divisao <- x / y
    escreval("DIVIS�O =", divisao)
     senao
      escreval("DIVIS�O IMPOSS�VEL!")
   fimse
 fimpara
 
 
 escreva("DIVIS�O =", divisao)





Fimalgoritmo