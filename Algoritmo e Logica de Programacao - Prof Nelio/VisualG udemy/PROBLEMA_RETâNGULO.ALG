Algoritmo "problema_retângulo"

Var

base, altura : real
area, perimetro, diagonal : real

Inicio

 escreva("Insira o valor da base do retângulo: ")
 leia(base)
 escreva("Insira o valor da altura do retângulo: ")
 leia(altura)
 
 area <- (base * altura)
 perimetro <- 2*(base * altura)
 diagonal <- RaizQ(base^2 + altura^2)
 
 escreval("Área: ", area:8:4)
 escreval("Perímetro: ", perimetro:8:4)
 escreva("Diagonal: ", diagonal:8:4)





Fimalgoritmo