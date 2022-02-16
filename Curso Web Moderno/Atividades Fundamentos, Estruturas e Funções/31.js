const vetor = [2, 5, 6, -2, -8, -120, 7, 89, 12]
let count = 0
for (let i = 0; i < vetor.length; i++) {
    if(vetor[i] < 0) {
        count += 1
    }
}
console.log('Negativos = ' + count)