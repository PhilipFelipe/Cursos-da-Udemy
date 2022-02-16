Algoritmo "problema_matriz_geral"

//MATRIZES

Var

soma : real
n, c, l, j, i : inteiro
mat : vetor [0..9, 0..9] de real
matA : vetor [0..9, 0..9] de real

Inicio

escreva("Qual a ordem da matriz? ")
leia(n)


para i de 0 ate n-1 faca
 para j de 0 ate n-1 faca
  escreva("Elemento [", i, ",", j, "]= ")
  leia(mat[i, j])
 fimpara
fimpara


soma <- 0
para i de 0 ate n-1 faca
 para j de 0 ate n-1 faca
  se mat[i, j] > 0 entao
  soma <- soma + mat[i,j]
  fimse
 fimpara
fimpara

escreval
escreva("SOMA DOS POSTIVIOS: ", soma:4:1)
escreval
escreval
escreva("Escolha uma linha: ")
leia(l)
escreval
escreva("LINHA ESCOLHIDA: ")
para i de l ate l faca
 para j de 0 ate n-1 faca
  escreva(mat[i, j]:4:1, " ")
 fimpara
fimpara
escreval
escreval
escreva("Escolha uma coluna: ")
leia(c)
escreval
escreva("COLUNA ESCOLHIDA: ")
para i de 0 ate n-1 faca
 para j de c ate c faca
  escreva(mat[i, j]:4:1, " ")
 fimpara
fimpara
escreval
escreval

escreva("DIAGONAL PRINCIPAL")
para i de 0 ate n-1 faca
 para j de 0 ate n-1 faca
  se i=j entao
   escreva(mat[i,j]:4:1, " ")
  fimse
 fimpara
fimpara
escreval
escreval

para i de 0 ate n-1 faca
 para j de 0 ate n-1 faca
  se mat[i, j] < 0 entao
   matA[i, j] <- exp(mat[i, j], 2)
   senao
   matA[i, j] <- mat[i, j]
  fimse
 fimpara
fimpara
  

escreval
escreval("MATRIZ ALTERNADA:")
para i de 0 ate n-1 faca
 para j de 0 ate n-1 faca
 escreva(matA[i, j]:4:1, "  ")
 fimpara
 escreval
fimpara






Fimalgoritmo