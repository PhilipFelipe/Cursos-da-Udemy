function inverso(booleanOrNumber) {
    if (booleanOrNumber === false || booleanOrNumber === true) {
        return console.log(!booleanOrNumber)
    } else if (booleanOrNumber != 0) {
        return console.log(booleanOrNumber * (-1))   
    } else if (booleanOrNumber === typeof(String)){
        return console.log('Booleanos ou números esperados, mas o parâmetro é do tipo string')
    }
}

inverso(false)