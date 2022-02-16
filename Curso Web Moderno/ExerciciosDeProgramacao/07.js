function entreMinMax(numero, min, max, inclusivo) {
    if (inclusivo !== true) {
        inclusivo = false
    }
    switch (inclusivo) {
        case false:
            if ((numero > min && numero < max) || (numero < min && numero > max)) {
                console.log(true)
            } else {
                console.log(false)
            }
            break;
        case true:
            if ((numero >= min && numero <= max) || (numero <= min && numero >= max)) {
                console.log(true)
            } else {
                console.log(false)
            }
            break;
        default:
            console.log('Erro...')
            break;
    }
}
entreMinMax(10, 0, 100)
entreMinMax(16, 100, 160)
entreMinMax(3, 150, 3)
entreMinMax(3, 150, 3, true)