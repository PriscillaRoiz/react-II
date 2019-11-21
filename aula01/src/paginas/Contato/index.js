import React from 'react';
import Formulario from './Formulario/Componentes/index'
import Sucesso from './Sucesso'
import botao from './Formulario/Componentes/Botao'

import './style.css'

class Contato extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            conteudo: 'formulario'
        }
    }

    handleMudaContato = (proximaPagina) => {
        this.setState({
            conteudo:proximaPagina
             })
    }
    
    render () {
    return (
        <section className='contato'>
                {
                    this.state.conteudo === 'formulario' &&
                    <Formulario
                    mudaConteudo={this.handleMudaConteudo}
                />
                }
                {
                    this.state.conteudo === 'Sucesso' &&
                    <Sucesso
                    mudaConteudo={this.handleMudaConteudo}
                />
                }
        </section>
            
        )
    }
}
export default Contato