let vetA = [4, 12, 33]
let vetB = [45, 52, 65]

function trocaVetor(vet1, vet2) {
    vet1.push(vet2[0], vet2[1], vet2[2])
    vet2.push(vet1[0], vet1[1], vet1[2])
    vet1.reverse(vet1)
    vet2.reverse(vet2)
    vet1.splice(3, 5)
    vet2.splice(3, 5)
    vet1.reverse(vet1)
    vet2.reverse(vet2)

    
    console.log(
`VetA = ${vet1}
VetB = ${vet2}`)
}

trocaVetor(vetA, vetB)