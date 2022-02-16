Algoritmo "problema_media_idades"


//ESTRUTURA EQUANTO

Var

soma, idade, cont : inteiro
media : real

Inicio

 soma <- 0
 cont <- 0
 
 escreval("Digite as idades: ")
 leia(idade)
 
 enquanto idade >= 0 faca

    soma <- soma + idade
    cont <- cont + 1
    
    leia(idade)
 fimenquanto
 
 se cont = 0 entao
    escreva("IMPOSSÍVEL CALCULAR")
    senao
    media <- soma / cont
    escreval("MEDIA = ", media:4:2)
 fimse


 
 
 
 
 
Fimalgoritmo


