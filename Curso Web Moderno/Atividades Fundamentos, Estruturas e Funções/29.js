let vetor = []
let dentro = 0
let fora = 0

for( let i = 0; i < 30; i++) {
    vetor[i] = i+1
}

function percorre() {
    for (let i = 0; i < 30; i++) {
        if(vetor[i] < 10 || vetor[i] > 20){
            fora += 1
        } else
        {
            dentro += 1
        }
    } console.log(`Fora: ${fora}, Dentro: ${dentro}`)
}

percorre()