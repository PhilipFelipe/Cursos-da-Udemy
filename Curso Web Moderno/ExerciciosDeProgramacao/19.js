function calcMedia(array) {
    let count = 0
    let soma = 0
    for (let i = 0; i < array.length; i++) {
        soma += array[i]
        count++
    }
    console.log(`Média = ${soma/count}`)
}

calcMedia([1, 2, 3, 4, 5])