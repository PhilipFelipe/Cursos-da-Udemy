import React from 'react'

//Apenas CONST pode ser exportada!
const BoaTarde = props => <h1>Boa tarde {props.nome}!</h1>
const BoaNoite = props => <h1>Boa noite {props.nome}!</h1>

export { BoaTarde, BoaNoite }
export default { BoaTarde, BoaNoite }