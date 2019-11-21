import React from 'react';

function Botao (props) {
    let classes = 'botao'

if (props.desabilitado) {
    classes += ' botao--desabilitado'
}
        const handleClick  = (evento) => {
            evento.preventDefault()
            props.mudaConteudo('props.pagina')
        }
    return (
        <button onClick ={handleClick} className = {classes}> 
        {props.children}
        </button>
    
    )
}
export default Botao