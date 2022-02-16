function multiplicar(x, y) {
    let resultado = 0
    for (let i = 0; i < y; i++) {
        resultado += x
    }
    return console.log(resultado)
}

multiplicar(4, 4)