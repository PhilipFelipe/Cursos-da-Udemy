let vetor = [1, 2, 3, 4, 5]

function multiplicaVetor (vetor, multiplicador) {
    let vetorResult = []
    vetor.forEach(element => {
        vetorResult.push(element * multiplicador)
    })
    return vetorResult
}
console.log(multiplicaVetor(vetor, 4))