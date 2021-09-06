import React, {Component} from 'react';

class Formulario extends Component{
    constructor(){
        super();
        this.state ={
            valor:''
        }
    }
    evitarSubmit(e){
        e.preventDefault();
        console.log('Evitando el envío')
    }

    controlarCambios(event){
        this.setState({
            valor: event.target.value
        }, () => console.log(this.state.valor))
        
    }

    render(){
        return(
            <form action="" onSubmit={(milanesa)=>this.evitarSubmit(milanesa)}>
                <input type="text" onChange={(papas)=>this.controlarCambios(papas)} value={this.state.valor} placehoder='ingrese su nombre'/>
                <button type="submit">Enviar</button>
            </form>
        )
    }

}

export default Formulario;