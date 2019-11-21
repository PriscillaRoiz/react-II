import React from 'react'
import RocketChat from '../../imagens/RocketChat.png'
import './style.css'
import Menu from './Menu'

function Nav () {
    return (
        <nav className= 'navbar'>
        <img 
        src ={RocketChat} 
        alt ='Logotipo do Rocketchat'
        className= 'navbar-logo'/>

        <Menu/>
        </nav>
    )
}

export default Nav