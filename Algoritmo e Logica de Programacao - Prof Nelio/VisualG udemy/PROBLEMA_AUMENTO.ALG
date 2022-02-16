Algoritmo "problema_aumento"



Var

salario, novosalario, aumento : real
porcento : caractere

Inicio

escreva("Digite o salário da pessoa: ")
leia(salario)

se salario <= 1000 entao
 novosalario <- salario + (salario * 20/100)
 aumento <- salario * (20/100)
 porcento <- "20%"
 escreval("Novo salário:", novosalario:8:2)
 escrevaL("Aumento:", aumento)
 escreval("Porcentagem = ", porcento)
  senao
   se (salario > 1000) e (salario <= 3000) entao
   novosalario <- salario + (salario * 15/100)
   aumento <- salario * (15/100)
   porcento <- "15%"
   escreval("Novo salário:", novosalario:8:2)
   escreval("Aumento:", aumento)
   escreval("Porcentagem =", porcento)
    senao
     se (salario > 3000) e (salario <= 8000) entao
     novosalario <- salario + (salario * 10/100)
     aumento <- salario * (10/100)
     porcento <- "10%"
     escreval("Novo salário:", novosalario:8:2)
     escreval("Aumento:", aumento)
     escreval("Porcentagem =", porcento)
      senao
       se salario > 8000 entao
       novosalario <- salario + (salario * 5/100)
       aumento <- salario * (5/100)
       porcento <- "5%"
       escreval("Novo salário:", novosalario:8:2)
       escreval("Aumento:", aumento)
       escreval("Porcentagem =", porcento)
       fimse
     fimse
   fimse
fimse









Fimalgoritmo

