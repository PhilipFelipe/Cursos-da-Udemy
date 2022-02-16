const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const http = require('http')


app.use(bodyParser.urlencoded({ extended: true }))

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Parabéns, usuário incluído!</h1>')
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.body)
    console.log(req.params.id)
    resp.send('<h1>Parabéns, usuário alterado!</h1>')
})

app.listen(3003)