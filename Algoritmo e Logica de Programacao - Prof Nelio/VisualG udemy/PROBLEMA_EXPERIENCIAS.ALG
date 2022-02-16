Algoritmo "problema_experiencias"

//ESTRUTURA PARA

Var

 n, i, qnt, total, sapo, coelho, rato: inteiro
 type : caractere
 s, c, r : real
 
Inicio

  sapo <- 0
  coelho <- 0
  rato <- 0

 escreva("Quantos casos de testes serão digitados? ")
 leia(n)

 
para i de 1 ate n faca
  escreva("Quantidade de cobais: ")
  leia(qnt)
  escreva("Tipo de cobaia: ")
  leia(type)


 se type = "R"  entao
  rato <- rato + qnt
   senao
    se type = "S" entao
     sapo <- sapo + qnt
      senao
      coelho <- coelho + qnt
    fimse
 fimse

fimpara
 
 total <- sapo + coelho + rato
  r <- rato / total * 100
  s <- sapo / total * 100
  C <- coelho / total * 100



 escreval("RELATÓRIO FINAL:")
  escreval("Total de cobais:", total)
  escreval("Total de coelhos:", coelho )
  escreval("Total de ratos:", rato)
  escreval("Total de sapos:", sapo)
  escreval("Percentual de coelhos:", c:8:2)
  escreval("Percentual de ratos:", r:8:2)
  escreval("Percentual de sapos:", s:8:2)




Fimalgoritmo