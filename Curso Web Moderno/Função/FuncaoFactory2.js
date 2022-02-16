function criarProduto(nome, preco) {
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2400.50))
console.log(criarProduto('Ipad', 1199.30))
