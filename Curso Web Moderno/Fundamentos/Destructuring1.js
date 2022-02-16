//Recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Ruazona',
        numero: 1234
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)
