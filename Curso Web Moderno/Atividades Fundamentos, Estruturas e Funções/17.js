function plano(salario, plano) {
    switch (plano){
        case 'A':
            console.log('Novo salário = ' + (salario + (salario * 0.1)))
            break;
        case 'B':
            console.log('Novo salário = ' + (salario + (salario * 0.15)))
            break;
        case 'C':
            console.log('Novo salário = ' + (salario + (salario * 0.2)))
            break;
        default:
            console.log('Plano inválido!')
            break;
    }
}

plano(1500, 'C')