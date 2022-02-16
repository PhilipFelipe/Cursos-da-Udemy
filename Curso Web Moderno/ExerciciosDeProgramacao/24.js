function repeteCaractere(caractere, string){
    hold = string.split(caractere)
    return hold.length - 1
}

console.log(repeteCaractere('r', "A sorte favorece os audazes"))
console.log(repeteCaractere('c', "Conhece-te a ti mesmo"))