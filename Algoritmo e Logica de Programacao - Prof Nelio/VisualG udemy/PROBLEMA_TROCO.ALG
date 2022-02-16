Algoritmo "problema_troco"

Var

 preco, pagamento, troco : real
 unidade : inteiro

Inicio

 escreva("Valor do produto: ")
 leia(preco)
 escreva("Quantidade comprada: ")
 leia(unidade)
 escreva("Dinheiro recebido: ")
 leia(pagamento)
 
 troco <- pagamento - (preco * unidade)
 
 escreva("TROCO = ", troco)


Fimalgoritmo