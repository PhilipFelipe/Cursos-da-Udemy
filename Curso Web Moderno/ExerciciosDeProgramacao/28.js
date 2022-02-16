function filtrarPorDigitos(array, digitos) {
    let newArray = []
    for(let i = 0; i < array.length;i++) {
        if (digitos == 1) {
            if (array[i] < 10) {
                newArray[i] = array[i]
            }
        }else if (digitos == 2) {
                    if (array[i] >= 10 && array[i] < 99) {
                     newArray[i] = array[i]
                    }
        }else {
            console.log('Digito invalido')
        }
    }
    return newArray.filter((a) => a)
}

console.log(filtrarPorDigitos([12, 16, 1, 5], 2))