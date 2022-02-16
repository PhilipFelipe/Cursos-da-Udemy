function removePropriedade(objeto, propriedade) {
    delete objeto[propriedade]
    return console.log(objeto)
}

removePropriedade({a: 1, b: 2}, "a")
removePropriedade({
    id: 20,
    nome: "Caneta",
    descricao: "Nenhuma"
}, "descricao")

const teste = {a:1, b: 2}
console.log(Object.is(removePropriedade({a: 1, b: 2}, "a"), {a:1, b: 2}))
console.log(Object.is(removePropriedade({
    id: 20,
    nome: "Caneta",
    descricao: "Nenhuma"
}, "descricao"), {
    id: 20,
    nome: "Caneta",
    descricao: "Nenhuma"
}))

