function calcDespesas(array) {
    let despesa = 0
    for (let i = 0; i < array.length; i++) {
        despesa += array[i].preco
    }
    return console.log(despesa)
}

calcDespesas([
    {nome: "Jornal Online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
])

calcDespesas([
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
])