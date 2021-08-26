/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import './card.css';

class Card extends Component{
    constructor(props){
        super(props)
        this.state = {
            text:'ver más',
            viewMore: false,
        }
    }
    //Necesitamos una función que modifique el estado.
    viewMore(){
        if(this.state.viewMore){
            this.setState({
                text:'ver más',
                viewMore: false
            })
        }else{
            this.setState({
                text: 'ver menos',
                viewMore: true,
            })
        }
    }

    //Neceitamos un evento onClick
    render(){
        return (
            <div className="character-card">
                <img src={`/assets/images/characters/${this.props.info.img}`} alt="" />
                <h4>{this.props.info.name}</h4>
                <p>{this.props.info.description}</p>
                <p className={`extra ${this.state.viewMore ? 'show' : 'hide'}`} >Universe: {this.props.info.extra}</p>
                <p className='more' onClick={ () => this.viewMore()} >{this.state.text}</p>
            </div>
        );
    }
}

export default Card