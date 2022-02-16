function randomNumber(numero) {
    if (numero < 1 && numero > 10) {
        console.log('Erro')
    }

    let x = Math.floor(Math.random() * (10 - 1) + 1)

    if (numero == x) {
        return console.log('Parabéns! O número sorteado foi ', x)
    } else {
        return console.log('Que pena! O número sorteado foi ', x)
    }

}

randomNumber(1)