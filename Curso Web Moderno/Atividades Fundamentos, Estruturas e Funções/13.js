function semana(x) {
switch (x){
    case 1:
        console.log('Domingo não é um dia útil!')
        break;
    case 2:
        console.log('Segunda é um dia útil!')
        break;
    case 3:
        console.log('Terça é um dia útil!')
        break;
    case 4:
        console.log('Quarta é um dia útil!')
        break;
    case 5:
        console.log('Quinta é um dia útil!')
        break;
    case 6:
        console.log('Sexta é um dia útil!')
        break;
    case 7:
        console.log('Sábado não é um dia útil!')
        break;
    default:
        console.log('Valor inválido...')
        break;
 }
}
semana(13)