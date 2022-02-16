// O import precisa ser com a primeira letra maíuscula!
import React from 'react'
import ReactDOM from 'react-dom'

//import Primeiro from './components/Primeiro'
//import BomDia from './components/BomDia'
//import Multi from './components/Multiplos'
//import { BoaTarde, BoaNoite } from './components/Multiplos'
import Saudacao from './components/Saudacao'

ReactDOM.render(
    <div>
        <Saudacao tipo="Bom Dia" nome="João"/>
    </div>
, document.getElementById('root'))


//ReactDOM.render(<BomDia nome="Felipe" idade={10} />, document.getElementById('root'))

/* ReactDOM.render(
    <div>
        <Multi.BoaTarde nome="Ana"/>
        <Multi.BoaNoite nome="Felipe"/>
    </div>
, document.getElementById('root')) */

// No jQuery --> $('<h1>').html('React 2')