import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import PokemonProfile from './PokemonProfile';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardActionArea from '@material-ui/core/CardActionArea';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';

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
        let pokemonName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

        return (
            <div>
            <Card className="card">
                <CardActionArea onClick={this.handleClickOpen}> 
                <CardHeader 
                    avatar={
                        <Avatar aria-label="pokedex number">
                            {id}
                        </Avatar>
                    }
                    title={pokemonName}
                />
                <Divider variant="middle" />
                <div className="pokemon-species">
                <div className="pokemon-species-container">
                    <div className="pokemon-species-sprite">
                    <img src={require(`../public/sprites/${id}.png`)} alt={`${pokemon.name}`}/>
                    </div>
                </div>
                </div>
                </CardActionArea>
            </Card>
            <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    #{`${id}`} {`${pokemonName}`}
                </DialogTitle>
                <PokemonProfile selectedPokemon={`${pokemon.name}`} handleClose={this.handleClose}/>
            </Dialog>
            </div>
        ); 
    }
}

export default Pokemon;