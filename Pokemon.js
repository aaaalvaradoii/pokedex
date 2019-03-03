import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import PokemonProfile from './PokemonProfile';
import './index.css';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardActionArea from '@material-ui/core/CardActionArea';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

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
        const image = `../public/sprites/${id}.png`;
        console.log('img: ',image);

        return (
            <div>
            {/* <Button onClick={this.handleClickOpen}>
                <div className="pokemon-species">
                <div className="pokemon-species-container">
                    <div className="pokemon-species-sprite">
                    <img src={require(`../public/sprites/${id}.png`)} alt={`${pokemon.name}`}/>
                    </div>
                    <div className="pokemon-species-name"> {pokemon.name} </div>
                </div>
                </div>
            </Button> */}

            <Card className="card">
                <CardActionArea onClick={this.handleClickOpen}> 
                <CardHeader 
                    avatar={
                        <Avatar aria-label="pokedex number">
                            {id}
                        </Avatar>
                    }
                    title={pokemon.name}
                />
                <CardMedia 
                    image={require(`../public/sprites/${id}.png`)}
                    title="pokemon sprite"
                    className="sprite"
                />
                </CardActionArea>
            </Card>

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