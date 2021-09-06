import React, {Component} from 'react';

class FilterField extends Component{
    constructor(){
        super();
        this.state ={
            filterBy:''
        }
    }
    evitarSubmit(e){
        e.preventDefault();
        console.log('Evitando el envío')
    }

    controlarCambios(event){
        this.setState({
            filterBy: event.target.value
        }, () => this.props.filtrarPersonajes(this.state.filterBy))
        
    }

    render(){
        return(
            <form action="" onSubmit={(milanesa)=>this.evitarSubmit(milanesa)}>
                <input type="text" onChange={(papas)=>this.controlarCambios(papas)} value={this.state.filterBy} placehoder='ingrese su nombre'/>
            </form>
        )
    }

}

export default FilterField;