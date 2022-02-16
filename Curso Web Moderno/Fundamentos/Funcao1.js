//FUNÇÃO SEM RETORNO
function ImprimirSoma(a, b) {
    console.log(a + b)
}

ImprimirSoma(2, 3)


//FUNÇÃO COM RETORNO
function soma(a, b = 0) {
    return a + b
}

console.log(soma(2, 3))
