import React, { Component } from 'react';
import Pokemon from './Pokemon';
import CircularProgress from '@material-ui/core/CircularProgress';

class PokemonList extends Component{
    
    constructor(props){
        super(props);

        this.state = {
            species : [],
            fetched : false,
      }
    }

    componentWillMount() {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(res => res.json())
        .then(response => {
            this.setState({
            species : response.results,
            fetched : true
        });
        });
    }
  
    render() {
        const { fetched, species } = this.state;

        return (
            <div className="container">
                { fetched ? (
                    <div className="pokemon-species-list"> {
                        species.map((pokemon, i) => (
                            <Pokemon key={pokemon.name} id={i+1} pokemon={pokemon}/>)
                        )
                    }
                    </div>
                ) : (
                        <CircularProgress color="secondary"/>
                )}
            </div>
        );
    }
  }

export default PokemonList;