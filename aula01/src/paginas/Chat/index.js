import React from 'react';
import {getMensagens} from '../../service/mensagens'
import Mensagem from './componentes/Mensagens'

import './style.css'

class Chat extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            mensagens: []
        }
    }

componentDidMount() {
    getMensagens()
        .then(response => {
        this.setState({
            mensagens: response.data
          })
        })

        .catch (error => {
        },
        5000
    )
}

    render() {
    return (
        <section className='chat'>
            <h2>Mensagens</h2>
            {this.state.mensagens.length > 0 
            ? this.state.mensagens.map(mensagem => {
                return <Mensagem mensagem = {mensagem} key={mensagem.id} />
            })
            :<span> Carregando mensagens :D </span>
            }
        </section>
        )
    }
}

export default Chat