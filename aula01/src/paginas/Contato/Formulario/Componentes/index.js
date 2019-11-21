import React from 'react';
import Grupo from './Grupo'
import Botao from './Botao'

class Formulario extends React.Component{
    constructor (props) {
        super (props)
        this.state = {
            nome: {
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
        !this.state.nome.valor ||
        this.state.nome.erro ||
        !this.state.email.valor ||
        this.state.email.erro ||
        !this.state.pais.valor ||
        this.state.pais.erro ||
        !this.state.mensagem.valor ||
        this.state.pais.erro
    )
}

    render() {
        const verificarBotao = this.estaDesabilitado()
        return (
            <div className = 'pagina'>
                <h2>Entre em contato conosco!</h2>
                    <form className = 'formulario'>
                        
                    <Grupo erro = {this.state.nome.erro}>
                        <Grupo.Legenda htmlFor = 'nome'></Grupo.Legenda>
                        <Grupo.CaixaTexto
                        name='nome'
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
                            pagina= 'sucesso'
                        >
                        Enviar
                        </Botao>
                    </form>
                </div>
            )
        }
    }

    export default Formulario