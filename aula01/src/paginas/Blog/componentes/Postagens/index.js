import React from 'react';

import './style.css'

function Postagem (props) {
    return (
        <div className = 'postagem'>
       
        <h2>{props.postagem.title}</h2>
        <h3>{props.postagem.body}</h3>
        <button className = 'botao'> Saiba mais</button>
        <hr />
        <p>{props.postagem.texto}</p>

      </div>
    
    )
}

export default Postagem