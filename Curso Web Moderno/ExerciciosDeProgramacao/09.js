function repetir(elemento, repetidor) {
    const retorno = []
    for (let i = 0; i < repetidor; i++) {
        retorno[i] = elemento
    }
    return console.log(retorno)
}

repetir(2, 8)