Algoritmo "problema_ret�ngulo"

Var

base, altura : real
area, perimetro, diagonal : real

Inicio

 escreva("Insira o valor da base do ret�ngulo: ")
 leia(base)
 escreva("Insira o valor da altura do ret�ngulo: ")
 leia(altura)
 
 area <- (base * altura)
 perimetro <- 2*(base * altura)
 diagonal <- RaizQ(base^2 + altura^2)
 
 escreval("�rea: ", area:8:4)
 escreval("Per�metro: ", perimetro:8:4)
 escreva("Diagonal: ", diagonal:8:4)





Fimalgoritmo