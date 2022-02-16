const notas = [7, 5, 8, 4, 2, 5.4, 9, 10]

//Sem CALLBACK
let notasBaixas = []
for ( let i in notas){
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//Com CALLBACK
const notasBaixas1 = notas.filter(function (nota){
    return nota < 7
})
console.log(notasBaixas1)

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)