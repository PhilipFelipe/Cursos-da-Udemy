const valores = [7.8, 8.8, 3.4, 4.5]
console.log(valores[0], valores[3])
console.log(valores[4])//NÃO DA ERRO, APARECE UNDEFINED

valores [4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')//VÁRIOS VALORES DIFERENTES
console.log(valores)

console.log(valores.pop())//RETIRE O ÚLTIMO ELEMENTO DO ARRAY
delete valores[0]//DELETA UM ELEMENTO ESCOLHIDO
console.log(valores)

console.log(typeof valores)
