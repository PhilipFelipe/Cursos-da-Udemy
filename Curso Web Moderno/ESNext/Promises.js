function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que massa!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e)) // Para tratar o erro do reject da Promise