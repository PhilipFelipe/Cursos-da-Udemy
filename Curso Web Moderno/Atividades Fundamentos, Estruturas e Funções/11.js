function bissexto(x) {
   if (x % 400 === 0){
       console.log('É bissexto!')
   } else if (x % 100 === 0) {
       console.log('Não é bissexto!')
   } else if (x % 4 === 0) {
       console.log('É bissexto!')
   } else {
       console.log('Não é bissexto')
   }
}

bissexto(2000)
bissexto(4)
bissexto(100)
bissexto(2020)
bissexto(2021)
