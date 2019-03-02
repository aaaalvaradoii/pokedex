import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class Pokemon extends Component{

    constructor(props){
        super(props);
  
        this.state = {
            open: false,
            currentPokemon: '',
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
                ref={`${pokemon.name}`}
            >
                <DialogTitle id="alert-dialog-title">
                    #{`${id}`} {`${pokemon.name}`}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        DESCRIPTION
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose} color="primary" autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
            </div>
        ); 
    }
}

export default Pokemon;