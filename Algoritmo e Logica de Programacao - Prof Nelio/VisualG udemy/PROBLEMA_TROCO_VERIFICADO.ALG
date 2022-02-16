Algoritmo "problema_troco_verificado"

Var

preco, dinheiro, troco, falta : real
qnt : inteiro

Inicio

 escreva("Preço unitário do produto: ")
 leia(preco)
 escreva("Quantidade comprada: ")
 leia(qnt)
 escreva("Dinheiro recebido: ")
 leia(dinheiro)
 
 troco <- dinheiro - (preco * qnt)
 falta <- (preco * qnt) - dinheiro
 se dinheiro < (preco * qnt) entao
  escreval("DINHEIRO INSUFICIENTE. FALTAM ", falta, " REAIS ")
  senao
  se troco >= 0 entao
   escreval("TROCO = ", troco)
  fimse
 fimse
 
 
 
 
 
Fimalgoritmo


