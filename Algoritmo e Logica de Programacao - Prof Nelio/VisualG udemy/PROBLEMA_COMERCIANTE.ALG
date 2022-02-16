Algoritmo "problema_comerciante"

//VETORES

Var

totalvenda, totalcompra, lucrototal : real
nome : caractere
n, i, lucro1, lucro2, lucro3 : inteiro
vetA : vetor [0..9] de real
vetB : vetor [0..9] de real
vetL : vetor [0..9] de real
vetP : vetor [0..9] de real

Inicio

 escreva("Serão digitados os dados de quantos produtos? ")
 leia(n)

 para i de 0 ate n-1 faca
  escreval("Produto", i+1, ":")
  escreva("Nome: ")
  leia(nome)
  escreva("Preco de compra: ")
  leia(vetA[i])
  escreva("Preco de venda: ")
  leia(vetB[i])
 fimpara
 
 
 lucro1 <- 0
 lucro2 <- 0
 lucro3 <- 0
 para i de 0 ate n-1 faca
  vetL[i] <- vetB[i] - vetA[i]
  vetP[i] <- (vetL[i] * 100) / vetA[i]
   se vetP[i] < 10 entao
    lucro1 <- lucro1 + 1
   senao
    se (vetP[i] >= 10) e (vetP[i] <= 20) entao
     lucro2 <- lucro2 + 1
     senao
      lucro3 <- lucro3 + 1
    fimse
   fimse
 fimpara
 
 
 totalcompra <- 0
  para i de 0 ate n-1 faca
   totalcompra <- totalcompra + vetA[i]
  fimpara
  
 totalvenda <- 0
  para i de 0 ate n-1 faca
   totalvenda <- totalvenda + vetB[i]
  fimpara
  
 lucrototal <- 0
  para i de 0 ate n-1 faca
   lucrototal <- lucrototal + vetL[i]
  fimpara
  
  
  escreval
  escreval("RELATÓRIO:")
  escreval("Lucro abaixo de 10%: ", lucro1)
  escreval("Lucro entre 10% e 20%: ", lucro2)
  escreval("Lucro acima de 20%: ", lucro3)
  escreval("Valor total de compra: R$", totalcompra:4:2)
  escreval("Valor total de venda: R$", totalvenda:4:2)
  escreval("Lucro total: R$", lucrototal:4:2)
  
Fimalgoritmo
