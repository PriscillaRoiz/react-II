import React from 'react';
import './App.css';
import PaginaInicial from './paginas/PaginasInicial' 
import Nav from './componentes/Nav'
import { Switch, Route } from 'react-router-dom'
import Contato from "./paginas/Contato"
import Chat from "./paginas/Chat"
import Blog from "./paginas/Blog"

function App() {
  return (
    <div>

    <Nav/>

    <Switch>
      <div>
      
        <Route exact path='/' component={PaginaInicial} />
        <Route path='/contato' component={Contato} />
        <Route path='/chat' component={Chat} />
        <Route path='/blog' component={Blog} />

      </div>
    </Switch>
    </div>
  );
}

export default App;
