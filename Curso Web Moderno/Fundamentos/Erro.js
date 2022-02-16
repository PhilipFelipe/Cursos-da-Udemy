function TratarErroELancar(erro){
    throw true
}

function imprimirNomeGritado(Obj) {
    try{
    console.log(Obj.name.toUpperCase() + '!!!')
    } catch(e) {
        TratarErroELancar(e)
    } finally {
        console.log('Final')
    }
}


const Obj = {name: 'Roberto'}
imprimirNomeGritado(Obj)