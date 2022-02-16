let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
})


const primeiroElemento = arrayOuString => arrayOuString[0]
const primeiraLetra = string => string[0]
const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)