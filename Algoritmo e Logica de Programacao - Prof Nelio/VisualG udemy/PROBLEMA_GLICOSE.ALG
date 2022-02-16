Algoritmo "problema_glicose"

Var

glicose: real
class : caractere

Inicio

 escreva("Digite a medida da glicose: ")
 leia(glicose)
 
 se glicose <= 100 entao
  class <- "Normal"
    escreval("Classificação: ", class)
   senao
    se (glicose >= 100) e (glicose <= 140) entao
     class <- "Elevado"
      escreval("Classificação: ", class)
       senão
        se glicose > 140 entao
         class <- "Diabetes"
          escreval("Classificação: ", class)
        fimse
    fimse
 fimse
 
 
 
Fimalgoritmo



