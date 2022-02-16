const vetPilha = [1, 2, 3, 4, 5]
const vetAdiciona = [6, 7 ,8 ,9, 10]

vetPilha.push.apply(vetPilha, vetAdiciona)
console.log(vetPilha)