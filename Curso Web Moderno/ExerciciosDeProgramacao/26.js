function semVogal(string) {
    return string.replace(/[aeiou]/gi, '')
}

console.log(semVogal("Cod3r"))
console.log(semVogal("Fundamentos"))