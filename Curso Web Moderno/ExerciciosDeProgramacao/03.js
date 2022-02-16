function calculoSalario(horasNoMes, rendaPorHora) {
    let x = horasNoMes * rendaPorHora
    return console.log(`Salário igual a R$ ${x.toFixed(2)}`)
}

calculoSalario(160, 15)