import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Pokemon extends Component{

    render(){
        const { pokemon, id } = this.props;
        console.log('props: ',this.props);

        return (
            <Button variant="contained">
                <div className="pokemon-species">
                <div className="pokemon-species-container">
                    <div className="pokemon-species-sprite">
                    <img src={require(`../public/sprites/${id}.png`)} alt={`${pokemon.name}`}/>
                    </div>
                    <div className="pokemon-species-name"> {pokemon.name} </div>
                </div>
                </div>
            </Button>
        ); 
    }
}

export default Pokemon;