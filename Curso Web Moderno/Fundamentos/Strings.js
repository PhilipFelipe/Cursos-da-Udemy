const escola = "Cod3r"

console.log(escola.charAt(4))//ESCOLHE O CARACTERE
console.log(escola.charAt(5))//NÃO GERA ERRO 
console.log(escola.charCodeAt(3))//TABELA UNICODE
console.log(escola.indexOf('o'))//MOSTRA O ÍNDICE DO CARACTERE

console.log(escola.substring(1))
console.log(escola.substring(0, 3))//DO ÍNDICE 0(ORIGEM) ATÉ O 3(FINAL)

console.log('Escola '.concat(escola.concat('!')))//JUNTA
console.log('Escola ' + escola + '!')
console.log(escola.replace(3, 'e'))//TROCA O CARACTERE

console.log('Ana,Maria,Pedro'.split(',')) //SEPARA   E CRIA UM ARRAY