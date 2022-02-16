Algoritmo "problema_dardo"

Var

d1, d2, d3, maior : real


Inicio

 escreval("Digite as três distâncias:")
 leia(d1)
 leia(d2)
 leia(d3)
 
 se (d1 > d2) e (d1 > d3) entao
  maior <- d1
   escreval("Maior: ", d1)
    senao
     se (d2 > d1) e (d2 > d3) entao
      escreval("Maior: ", d2)
      senao
       escreva("Maior: ", d3)
    fimse
 fimse
 
 
 
Fimalgoritmo



