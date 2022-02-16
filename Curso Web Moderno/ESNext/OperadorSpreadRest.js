// Operador ... rest (juntar) / spread (espalhar)
// Usar rest com parametro de função

const { groupBy } = require("lodash")

// Usar spread em objeto
const funcionario = { nome: 'Maria', salario: 1224.53 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

// Usar spread com array
const grupoA = ['Joao', 'Pedro', 'Maria']
const grupoFinal = ['Gloria', ...grupoA, 'Rafaela']
console.log(grupoFinal)