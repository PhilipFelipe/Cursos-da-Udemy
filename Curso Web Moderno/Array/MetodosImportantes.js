const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //Massa quebrou o carro! .pop remove o último elemento do array
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

//Shift e Unshift
pilotos.shift() // Remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') //Adiciona na primemira posição
console.log(pilotos)

//Splice pode adicionar e remover elementos dentro do array

//Adicionando
pilotos.splice(2, 0, 'Botas', 'Massa')
console.log(pilotos)

//Removendo
pilotos.splice(3, 1) //Massa quebrou novamente Z.Z
console.log(pilotos)


//Slice
const alungsPilotos1 = pilotos.slice(2) //Novo Array, neste caso, à partir do índice 2!
console.log(alungsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) //Índice 1 entra, mas o 4 não!
console.log(algunsPilotos2)

