const vetInt = [1, 2, 3 ,4]
const vetStr = ['Olá', 'Tchau', 'Legal', 'Chatinho']
const vetDbl = [2.54, 2.31, 1.7, 87.2]

function concatenate (...args) {
    result = []
    for (let i = 0; i < arguments.length; i++) {
        result = result.concat(arguments[i])
    }
    return result
}

console.log(concatenate(vetInt, vetStr))
console.log(concatenate(vetDbl, vetInt))
