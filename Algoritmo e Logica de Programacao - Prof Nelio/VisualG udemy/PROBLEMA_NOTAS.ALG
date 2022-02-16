Algoritmo "problema_notas"

Var

   nota1, nota2, notafinal : real

Inicio

escreva("Digite a primeira nota: ")
 leia(nota1)
escreva("Digite a segunda nota: ")
 leia(nota2)
 
 notafinal <- nota1 + nota2
 
escreval("Nota final = ", notafinal:3:1)


 se (nota1+nota2) < 60 entao
      escreval("REPROVADO")
 fimse

Fimalgoritmo


