Algoritmo "problema_tempo_de_jogo"



Var

hi, hf : inteiro
duration : real
Inicio

escreva("Hora inicial: ")
leia(hi)
escreva("Hora final: ")
leia(hf)

duration <- 24 - (hi - hf)

se hi < hf entao
 duration <- hf - hi
senao
 duration <- 24 - hi + hf
fimse

 escreval("O jogo durou ", duration, " hora(s)!")




Fimalgoritmo

