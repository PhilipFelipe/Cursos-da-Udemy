let vet = []
let soma = 0
let media = 0
let count = 0

for (let i = 0; i < 10; i++) {
    vet[i] = i+1
}

for (let i = 0; i < vet.length; i++) {
    soma = soma + vet[i]
    count += 1
}

media = soma / count
console.log('Média: '  + media)