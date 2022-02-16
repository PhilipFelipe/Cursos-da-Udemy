console.log(soma(3, 4)) // é possível chamar a Function Declaration antes dela ser criada
console.log(sub(3, 4)) // Com Function Expression não funciona!
// Function Declaration
function soma(x, y) {
    return x + y
}

// Function Expression (anonima)
const sub = function(x, y) {
    return x - y
}

// Named Function Expression (pouco usada)
const mult = function mult(x, y){
    return x * y
}
