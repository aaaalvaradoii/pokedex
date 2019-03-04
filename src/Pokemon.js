import React, { Component } from 'react';
import PokemonProfile from './PokemonProfile';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
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

    handleOpen = () => {
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
        let pokemonNameTransform = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

        return (
            <div>
                <Card className="card">
                    <CardActionArea onClick={this.handleOpen}> 
                        <CardHeader avatar={<Avatar>{id}</Avatar>} title={pokemonNameTransform} />
                        <Divider variant="middle" />
                        <div className="pokemon-species">
                            <div className="pokemon-species-container">
                                <div className="pokemon-species-sprite">
                                    <img src={require(`../public/sprites/${id}.png`)} alt={`${pokemon.name}`} />
                                </div>
                            </div>
                        </div>
                    </CardActionArea>
                </Card>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <DialogTitle id="alert-dialog-title">
                        #{`${id}`} {`${pokemonNameTransform}`}
                    </DialogTitle>
                    <PokemonProfile selectedPokemon={`${pokemon.name}`} handleClose={this.handleClose} />
                </Dialog>
            </div>
        ); 
    }
}

export default Pokemon;