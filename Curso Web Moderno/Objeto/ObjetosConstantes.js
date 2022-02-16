//Pessoa -> 123 -> {...}
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//Pessoa -> 456 -> {...} 
//pessoa = {nome: 'Ana'}

Object.freeze(pessoa) //Congela o objeto, não consegue mais alterar o Objeto

pessoa.nome = 'Maria'
pessoa.end = 'Rua 123'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'João'}) //Constante mesmo kkkk, não muda de jeito nenhum
console.log(pessoaConstante)