function caro(p) {
    if (p.preco > 500) {
        return true
    }
}

function fragil(p) {
    if (p.fragil === true) {
        return true
    }
}






const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'Ipad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de plástico', preco: 18.99, fragil: false}
]

let resultado = (produtos.filter(caro).filter(fragil))
console.log(resultado)
