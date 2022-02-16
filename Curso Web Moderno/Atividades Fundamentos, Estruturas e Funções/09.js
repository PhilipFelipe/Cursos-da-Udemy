function notas(x) {
    let notaCorrigida = arredondar(x)
    if (notaCorrigida >= 40) {
        console.log(`Aprovado com nota: ${notaCorrigida}`)
    } else {
        console.log(`Reprovado com nota: ${notaCorrigida}`)
    }
}

function arredondar(x){
    if (x % 5 > 2) {
        return x + (5 -(x % 5))
    } else {
        return x
    }
}

notas(100)
notas(30)
notas(38)
notas(88)
notas(61)