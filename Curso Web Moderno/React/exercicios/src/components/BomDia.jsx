import React from "react";

export default props => [
        <h1 key="h1">Bom dia {props.nome}! {props.idade}</h1>,
        <h2 key="h2">Até Breve!</h2>
]

/* export default props => 
    <>
        <h1>Bom dia {props.nome}! {props.idade}</h1>
        <h2>Até Breve!</h2>
    </> */

/* export default props => 
    <div>
        <h1>Bom dia {props.nome}! {props.idade}</h1>
        <h2>Até Breve!</h2>
    </div> */

//props é uma convenção, poderia ser X por exemplo.