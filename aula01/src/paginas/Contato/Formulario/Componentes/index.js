import React from 'react';
import Grupo from './Grupo'
import Botao from './Botao'

class Formulario extends React.Component{
    constructor (props) {
        super (props)
        this.state = {
            name: {
                valor: '',
                erro: ''
            },
             email: {
                valor: '',
                erro: ''
            },
             pais: {
                valor: '',
                erro: ''
            },
             mensagem: {
                valor: '',
                erro: ''
            }
        }
    }
handleChange = ( nomeDoCampo,valorDoCampo,erroDoCampo = '') =>{
    this.setState({
        [nomeDoCampo]: {
            valor: valorDoCampo,
            erro: erroDoCampo
        }
    })
}

estaDesabilitado = () => {
    return (
        !this.state.name.valor ||
        this.state.name.erro ||
        !this.state.email.valor ||
        this.state.email.erro ||
        !this.state.pais.valor ||
        this.state.pais.erro
    )
}

handleSubmit = () => {
    const novoContato = {
        name: this.state.name.valor,
        email: this.state.email.valor,
        pais: this.state.pais.valor,
        mensagem: this.state.mensagem.valor
        
    }
}

    render() {
        const verificarBotao = this.estaDesabilitado()
        return (
            <div className = 'pagina'>
                <h2>Entre em contato conosco!</h2>
                    <form className='formulario' id='form1' onSubmit={this.handleSubmit}>
                        
                    <Grupo erro = {this.state.name.erro}>
                        <Grupo.Legenda htmlFor = 'name'></Grupo.Legenda>
                        <Grupo.CaixaTexto
                        name='name'
                        placeHolder = 'Digite seu nome'
                        onChange = {this.handleChange}
                        minLength = {10} 
                        required
                        type = 'text'
                        />                    
                     </Grupo>

                       <Grupo erro = {this.state.email.erro}>
                        <Grupo.Legenda htmlFor = 'email'></Grupo.Legenda>
                        <Grupo.CaixaTexto
                        name='email'
                        placeHolder = 'Digite seu email'
                        onChange = {this.handleChange}
                        required
                        type = 'email'
                        />                    
                     </Grupo>

                       <Grupo erro = {this.state.pais.erro}>
                        <Grupo.Legenda htmlFor = 'pais'></Grupo.Legenda>
                        <Grupo.CaixaTexto
                        name='pais'
                        placeHolder = 'Digite seu pais'
                        onChange = {this.handleChange}
                        required
                        type = 'text'
                        />                    
                     </Grupo>

                       <Grupo erro = {this.state.mensagem.erro}>
                        <Grupo.Legenda htmlFor = 'mensagem'></Grupo.Legenda>
                        <Grupo.CaixaTexto
                        name='mensagem'
                        placeHolder = 'Digite seu mensagem'
                        onChange = {this.handleChange}
                        type = 'text'
                        />                    
                     </Grupo>
                        <Botao
                            desabilitado = {verificarBotao}
                            mudaConteudo = {this.props.mudaConteudo}
                            onSubmit={this.handleSubmit}
                            pagina= 'sucesso'
                            type='submit'

                        >
                        Enviar
                        </Botao>
                    </form>
                </div>
            )
        }
    }

    export default Formulario