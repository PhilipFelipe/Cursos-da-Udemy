function gerarNumerosEntre(min, max) {
    if (min > max) {
        [max, min] = [min, max]
    }


    return new Promise(resolve => {
        const aleatorio = parseInt(Math.random() * ((max - min + 1) + min))
        resolve(aleatorio)
    })
}

gerarNumerosEntre(1, 60)
    .then(num => num * 10)
    .then(numx10 => `O número sorteado foi ${numx10}`)
    .then(console.log)

