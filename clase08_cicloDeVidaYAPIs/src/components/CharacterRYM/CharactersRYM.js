import React, {Component} from 'react';
import CardRYM from '../CardRYM/CardRYM'

class CharactersRYM extends Component {

    constructor(){
        super()
        this.state = {
            personajes: [],
            isLoaded: false, 
            nextUrl: ''
        }
    }

    componentDidMount(){
        console.log('monté RYM');
        let url = 'https://rickandmortyapi.com/api/character';

        fetch(url)
            .then( response => response.json() )
            .then( data => {
                console.log(data);
                this.setState({
                    personajes: data.results,
                    isLoaded: true,
                    nextUrl: data.info.next,
                })
            })
            .catch( error => console.log(error))
    }

    addMore(){
        let url = this.state.nextUrl;

        fetch(url)
            .then( response => response.json() )
            .then( data => {
                console.log(data);
                this.setState({
                    personajes: this.state.personajes.concat(data.results),
                    nextUrl:data.info.next
                })
            })
            .catch( error => console.log(error))

    }

    deleteCard(personajeABorrar){
        let personajesQueQuedan = this.state.personajes.filter( personaje => personaje.id !== personajeABorrar );

        this.setState({
            personajes: personajesQueQuedan
        })
    }

    render(){
        console.log('renderice RYM');
            return(
                <React.Fragment>
                    <div className="row card-container">
                        {   
                            this.state.isLoaded === false ?
                            <p>Cargando...</p> :
                            this.state.personajes.map((personaje, idx)=> <CardRYM key={personaje.name + idx} dataPersonaje={personaje} remove={(personajeABorrar)=>this.deleteCard(personajeABorrar)}/>)
                        }
                    </div>
                    <button onClick={()=>this.addMore()}>Más personajes</button>
                </React.Fragment>
            )
        }
}

export default CharactersRYM