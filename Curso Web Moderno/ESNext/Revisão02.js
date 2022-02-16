// Arrow function

// Sem corpo da função, não precisa de return
const soma = (a, b) => a + b
console.log(soma(2, 3))

// Com corpo da função, precisa de um return para não resultar em Undefined
const soma1 = (a, b) => {
    return a + b
}
console.log(soma1(3, 5))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// Parametros Default
function log(texto = 'Node') {
    console.log(texto)
}

log()
log(null)
log(undefined)
log('Sou mais forte que o padrão hahaha')

// Operador Rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(2, 3, 4, 5))