function lanchonete(order, qnt, value){
    switch (order){
        case 100:
            console.log('Valor total = R$ ' + ((qnt * value).toFixed(2)))
            break;
        case 200:
            console.log('Valor total = R$ ' + ((qnt * value).toFixed(2)))
            break;
        case 300:
            console.log('Valor total = R$ ' + ((qnt * value).toFixed(2)))
            break;
        case 400:
            console.log('Valor total = R$ ' + ((qnt * value).toFixed(2)))
            break;
        case 500:
            console.log('Valor total = R$ ' + ((qnt * value).toFixed(2)))
            break;
        case 600:
            console.log('Valor total = R$ ' + ((qnt * value).toFixed(2)))
            break;
        default:
            console.log('Produto inexistente!')
            break;
    }
}

lanchonete(400, 3, 7.5)