Algoritmo "problema_duracao"

Var

 duracao, horas, min, segundos, resto: inteiro

Inicio

 escreva("Digite a dura��o em segundos: ")
 leia(duracao)
 
 horas <- duracao \ 3600
 resto <- duracao % 3600
 
 min <- resto \ 60
 segundos <- resto % 60

 escreva(horas, ":", min, ":", segundos)
 
Fimalgoritmo