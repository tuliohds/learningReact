import React, { Component } from 'react';
import './style.css'

class FortuneCookie extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div className='container'>
            <img src={require('../../assets/cookie.png')} className='img'/>
            <Botao />
            <h3>Frase numero 1 aleatoria...</h3>
            </div>
        );
    }
}

class Botao extends Component {
    render(){
        return(
            <div>
                <button>Open cookie</button>
            </div>
        );
    }
}

export default FortuneCookie;