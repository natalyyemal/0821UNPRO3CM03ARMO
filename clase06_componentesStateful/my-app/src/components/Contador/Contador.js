import React, {Component} from 'react';

class Contador extends Component{
    constructor(){
        super();
        this.state = {
            valor: 0,
            mensaje: '',
            color:''
        }
    }

    incrementar(){
        console.log('aumentando');
        if(this.state.valor >=0){
            this.setState({
                mensaje: ''
            })
        }
        this.setState({
            valor: this.state.valor + 1
        })
    }

    decrementar(){
        console.log('disminuyendo');
        if(this.state.valor <=0){
            this.setState({
                mensaje:'Ojo estás en números negativos.',
                color:'red'
            })    
        }

        this.setState({
            valor: this.state.valor - 1
        })
    }

    reset(){
        this.setState({
            valor:0,
            mensaje: ''
        })
    }

    render(){
        return(
            <section>
                <p>El número es: {this.state.valor}</p>
                <p style={ {color: this.state.color} }>{this.state.mensaje}</p>
                <button onClick={ () => this.incrementar() }>Incrementar</button>
                <button onClick={ () => this.decrementar()}>Decrementar</button>
                <button onClick={ () => this.reset()}>Reset</button>
            </section>
        )
    }

}

export default Contador;