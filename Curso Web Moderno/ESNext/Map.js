const tecnologia = new Map()
tecnologia.set('react', {framework: false})
tecnologia.set('angular', {framework: true})

console.log(tecnologia.react) //ERRO
console.log(tecnologia.get('react'))
console.log(tecnologia.get('react').framework)

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

// A chave não é repetível
chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)