//Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0' //EVITAR
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B', attr3: '3'}
const filho = {__proto__: pai, attr3: 'C'}
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velmax: 200,
    aceleraMais(delta) {
        if (this.velAtual + delta <= this.velmax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velmax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velmax}Km/h`
    }
}

const ferrari = {
    modelo: 'f40',
    velmax: 324 //Shadowing
}

const volvo = {
    modelo: 'v40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.aceleraMais(100)
console.log(volvo.status())

ferrari.aceleraMais(300)
console.log(ferrari.status())
