function calc(a, b, c) {
    switch (c) {
        case '+':
            console.log(a + b)
            break;
        case '-':
            console.log(a - b)
            break;
        case '/':
            console.log(a / b)
            break;
        case '*':
            console.log(a * b)
            break;
        default:
            console.log('Operador inválido')
            break;
    }
}

calc(3, 4, '+')
calc(4,5, '/')
calc(6,2, '-')
calc(4,6, '*')