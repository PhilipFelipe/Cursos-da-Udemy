function menorArray(array) {
    let min = Math.min(...array)
    return min
}

console.log(menorArray([10, 5, 35, 65]))
console.log(menorArray([5, -15, 50, 3]))