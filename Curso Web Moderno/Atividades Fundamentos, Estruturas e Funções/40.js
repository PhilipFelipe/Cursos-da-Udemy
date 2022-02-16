function conceito(vetor) {
    let conceitos = []
    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i]>=0 && vetor[i]<= 4.9){
            conceitos.push('D')
        } else if(vetor[i]>=5 && vetor[i]<= 6.9){
            conceitos.push('C')
        } else if(vetor[i]>=7 && vetor[i]<= 8.9){
            conceitos.push('B')
        } else if(vetor[i]>=9 && vetor[i]<= 10){
            conceitos.push('A')
        } else {
            conceitos.push('Nota inválida.')
       }
    }
    return conceitos
}

let VetNotas = [2.2, 12, 5.2, 6.1, 7.5, 8.9, 10]
let vetConceitos = conceito(VetNotas)

console.log(vetConceitos)