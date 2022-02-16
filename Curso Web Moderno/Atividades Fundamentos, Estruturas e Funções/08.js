let pontos = [30, 40, 20, 4, 51, 25, 42, 38, 56, 0]
function ranking(){
    let qtdQuebraDeRecords = 0
    let maiorPontuacao = pontos[0]
    let menorPontuacao = pontos[0]
    let pior = 1
    for (let i = 1; i < pontos.length; i++) {
        if (pontos[i] > maiorPontuacao){
            maiorPontuacao = pontos[i]
            qtdQuebraDeRecords++
        } else if (pontos[i] < menorPontuacao){
            menorPontuacao = pontos[i]
            pior = i+1
        }
    }
    return [qtdQuebraDeRecords, pior]
}
console.log(ranking(pontos))