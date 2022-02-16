function segundoMaior(array) {
    let max = Math.max.apply(null, array)
    let maxi = array.indexOf(max)
    array[maxi] = -Infinity
    let secondMax = Math.max.apply(null, array)
    array[maxi] = max
    return secondMax
}

console.log(segundoMaior([12, 16, 1, 5]))
console.log(segundoMaior([8, 4, 5, 6]))