function pares(array) {
    let newArray = []
    for(let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0 && i % 2 == 0) {
            newArray[i] = array[i]
        }
    }
    return console.log(newArray.filter(Number))
}

pares([1, 2, 3, 4])
pares([10, 70, 22, 43])