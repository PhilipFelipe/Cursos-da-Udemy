//Função em JS é First-Class Object (Citizens)
//Higher-order function

//Criar de forma literal
function fun1() { } //BLOCO OBRIGATÓRIO NA FUNÇÃO!

//Armazenar função em variável
const fun2 = function () { }

//Armazenar dentro de um Array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())

//Passar função como parâmetro
function run(fun) {
    fun()
}

run (function() {console.log('Executando...') })

//Uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4) //JEITO 1

const cincoMais = soma(2, 3) //JEITO 2
cincoMais(4)