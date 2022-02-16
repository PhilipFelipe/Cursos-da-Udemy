//Object.preventExtensions
const produto = Object.preventExtensions({ //PREVINE A EXTENSÃO DO OBJETO
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal
const pessoa = {nome: 'Juliano', idade: 35}
Object.seal(pessoa) //Não pode adicionar nem excluir, apenas modificar os existentes.
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze = selado + valores constantes