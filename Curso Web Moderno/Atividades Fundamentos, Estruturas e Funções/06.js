function jsimples(capitalInicial, taxa, tempo) {
    let montante = capitalInicial + (capitalInicial * (taxa/100) * tempo)
    console.log('montante = ',montante.toFixed(2))
}
jsimples(100, 10, 2)

function jcomposto(capitalInicial, taxa, tempo){
    let montante = capitalInicial * (1 + (taxa/100)) ** tempo
    console.log('montante = ',montante.toFixed(2))
}

jcomposto(100, 10, 2)