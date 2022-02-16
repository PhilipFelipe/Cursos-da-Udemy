function triangulos (a, b, c) {
    if (a == b && b == c ) {
        console.log('Triângulo Equilátero!')
    } else if (a == b || b == c || a == c) {
        console.log('Triângulo Isósceles!')
    }else {
        console.log('Triângulo Escaleno!')
    }
}

triangulos(2, 1, 2)