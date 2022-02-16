function novaArray(array) {
    let newArray = []
    newArray[0] = array.shift()
    newArray[1] = array.pop()
    return console.log(newArray)
}

novaArray([1, 2, 3])