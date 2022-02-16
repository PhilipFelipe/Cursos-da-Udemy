function anuidade(mes, valor) {
    if (mes > 0 && mes < 13) {
        atraso = mes - 1
        return ('Valor a ser pago = R$ ' + (valor * ((1 + 0.05) ** atraso )).toFixed(2))
    } else {
        return 'Mês inválido'
    }
}

console.log(anuidade(3, 1500))