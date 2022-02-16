const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function lerConteudo(erro, conteudo) {
    console.log(conteudo.toString())
}

new Promise(function(resolve) {
    resolve = fs.readFile(caminho, lerConteudo)
    console.log('Deu certo eu acho!')
    return resolve
})

