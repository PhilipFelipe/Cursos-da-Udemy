Algoritmo "problema_medidas"

Var

 a, b, c, aq, ar, at : real

Inicio

 escreva("Digite a medida A: ")
 leia(a)
 escreva("Digite a medida B: ")
 leia(b)
 escreva("Digite a medida C: ")
 leia(c)
 
 aq <- a^2
 ar <- (a*b)/2
 at <- ((a+b)*c)/2
 
 escreval("ÁREA DO QUADRADO =", aq:10:4)
 escreval("ÁREA DO TRIÂNGULO RETÂNGULO =", ar:10:4)
 escreval("ÁREA DO TRAPÉZIO =", at:10:4)

Fimalgoritmo