const reducer = (previous, current) => previous + current

function somaArray(array) {
    return array.reduce(reducer)
}



console.log(somaArray([10, 20, 30]))