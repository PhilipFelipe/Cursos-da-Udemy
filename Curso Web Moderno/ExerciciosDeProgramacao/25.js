function palavrasSemelhantes(palavra, array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++)
        if (array[i].charAt(j) == palavra.charAt(j)) {
            newArray[i] = array[i]
        }
    }
    return newArray.filter((a) => a)
}

console.log(palavrasSemelhantes('pro', ["programação", "mobile", "profissional"]))
console.log(palavrasSemelhantes("python", ["javascript", "java", "c++"]))