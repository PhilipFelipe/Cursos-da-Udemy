let num1 = 1
let num2 = 2

num1++ //FORMA PÓS-FIXADA, ACRESCENTA 1 UNIDADE
console.log(num1)
--num1 //PRIORIDADE MAIOR!
console.log(num1)

console.log(++num1 === num2--)//O num2 SÓ É DECREMENTADO APÓS A COMPARAÇÃO "==="!
console.log(num1 === num2)//NÃO TEM VALORES IGUAIS