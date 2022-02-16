function inverteObjeto(objeto) {
    const ret = {}
    Object.keys(objeto).forEach(key => {
        ret[objeto[key]] = key;
    })
    return ret
}

console.log(inverteObjeto({ a: 1, b: 2, c: 3}))