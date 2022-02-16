Array.prototype.filter2 = function(callback) {
    newArray = []
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this, arguments)) {
            newArray.push(this[i])
        }
    }
    return newArray
}


const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'Ipad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de plástico', preco: 18.99, fragil: false}
]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil


let resultado = (produtos.filter2(caro).filter2(fragil))
console.log(resultado)