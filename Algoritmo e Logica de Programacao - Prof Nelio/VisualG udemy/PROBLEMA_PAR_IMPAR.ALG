Algoritmo "problema_par_impar"


//ESTRUTURA PARA

Var

n, i, x : inteiro

Inicio

 escreva("Quantos números você vai digitar? ")
  leia(n)
  
  para i de 1 ate n faca
   escreval("Digite um número: ")
   leia(x)
    se (x > 0) e (x % 2 = 0) entao
     escreval("PAR POSITIVO")
     senao
      se (x > 0) e (x % 2 <> 0) entao
       escreval("ÍMPAR POSITIVO")
        senao
         se (x < 0) e (x % 2 = 0) entao
          escreval("PAR NEGATIVO")
           senao
            se (x < 0) e (x % 2 <> 0) entao
             escreval("ÍMPAR NEGATIVO")
              senao
               se x = 0 entao
                escreval("NULO")
               fimse
            fimse
         fimse
      fimse
    fimse
  fimpara
   
Fimalgoritmo


