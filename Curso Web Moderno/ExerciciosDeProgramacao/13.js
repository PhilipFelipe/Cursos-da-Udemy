function formataArray(array) {
    const newArray = array.filter(Number.isInteger)
    return console.log(newArray) 
}

formataArray(["Javascript", 1, "3", "Web", 20])
formataArray(["a", "c"])