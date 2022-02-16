const peso1 = 1.0
const peso2 = Number('2.1')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))

const avaliacao1 = 3.9890
const avaliacao2 = 9.9832

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))//Formata as casas decimais
console.log(media.toString(2))//Convertem em binário
console.log(typeof media)
console.log(typeof Number)

/*ALGUNS CUIDADOS*/
console.log(7 / 0)// = INFINITY
console.log("10" / 2)
console.log("show" * 2)//ERRO
console.log(0.1 + 0.7)//IMPRECISÃO
console.log((10.345).toFixed(2))
