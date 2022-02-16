Algoritmo "menor_de_tres"

Var

 x1, x2, x3, menor : inteiro

Inicio

 escreva("Digite o primeiro número: ")
 leia(x1)
 escreva("Digite o segundo número: ")
 leia(x2)
 escreva("Digite o terceiro número: ")
 leia(x3)

 se (x1 < x2) e (x1 < x3) entao
   menor <- x1
 senao
    se (x2 < x3) entao
     menor <- x2
       senao
     menor <- x3
    fimse
 fimse
 
 escreval("MENOR =", menor)


Fimalgoritmo
