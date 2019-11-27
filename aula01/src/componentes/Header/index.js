import React from 'react'
import './style.css'

function Header(props) {
    return (
        <section className = {props.classHeader}>
        <h1>{props.children}</h1>         
        </section>
    )
}

export default Header

        // children renderiza tudo q tem dentro dele entre as tags de abertura e fechamento
        // quem controla o children é o componente que chama ele
