let valor//NÃO DEFINIDO
console.log(valor)

valor = null //Ausência de valor
console.log(valor)
//console.log(valor.ToString()) //ERRO!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //Evitar atribuir Undefined
console.log(produto.preco)
console.log(produto)

produto.preco = null //Sem preço
console.log(!!produto.preco)
console.log(produto)