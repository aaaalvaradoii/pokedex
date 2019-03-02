import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import PokemonProfile from './PokemonProfile';

class Pokemon extends Component{

    constructor(props){
        super(props);
  
        this.state = {
            open: false,
        }
    }

    handleClickOpen = () => {
        this.setState({
            open: true
        });
    };
    
    handleClose = () => {
        this.setState({
            open: false
        });
    };

    render(){
        const { pokemon, id } = this.props;
        console.log('props: ',this.props);

        return (
            <div>
            <Button onClick={this.handleClickOpen}>
                <div className="pokemon-species">
                <div className="pokemon-species-container">
                    <div className="pokemon-species-sprite">
                    <img src={require(`../public/sprites/${id}.png`)} alt={`${pokemon.name}`}/>
                    </div>
                    <div className="pokemon-species-name"> {pokemon.name} </div>
                </div>
                </div>
            </Button>

            <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    #{`${id}`} {`${pokemon.name}`}
                </DialogTitle>
                <PokemonProfile selectedPokemon={`${pokemon.name}`} handleClose={this.handleClose}/>
                
                
            </Dialog>
            </div>
        ); 
    }
}

export default Pokemon;