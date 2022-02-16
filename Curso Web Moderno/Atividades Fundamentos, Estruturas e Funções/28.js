let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let somaPar = 0;
let somaImpar = 0;
for (let i = 0; i < 10 ;i++) {
    if (vetor[i] % 2 == 0) {
        somaPar += 1
    } else {
        somaImpar += 1
    }
}
console.log(`Pares: ${somaPar}!`)
console.log(`Ímpares: ${somaImpar}!`)