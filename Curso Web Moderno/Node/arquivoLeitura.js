const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// Sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// Assincrono...
fs.readFile(caminho, 'utf-8', (erro, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)


//Lendo uma pasta
fs.readdir(__dirname, (erro, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})