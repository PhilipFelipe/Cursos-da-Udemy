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
 
 escreval("�REA DO QUADRADO =", aq:10:4)
 escreval("�REA DO TRI�NGULO RET�NGULO =", ar:10:4)
 escreval("�REA DO TRAP�ZIO =", at:10:4)

Fimalgoritmo