Algoritmo "problema_terreno"

Var

largura, comprimento, valor, area, preco: real

Inicio

escreva("Digite a largura do terreno: ")
leia(largura)
escreva("Digite o comprimento do terreno: ")
leia(comprimento)
escreva("Digite o valor do metro quadrado: ")
leia(valor)

area <- comprimento * largura
preco <- area * valor
escreval("�rea:", area:8:2)
escreva("O valor do terreno ser�: R$",preco:8:2)



Fimalgoritmo