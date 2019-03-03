import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

class PokemonProfile extends Component {

    constructor(props){
        super(props);

        this.state = {
            selectedPokemon : [],
            fetched : false,
            loading : false,
            description : ""
        }
    }

    componentWillMount() {
        const selectedPokemon = this.props.selectedPokemon;

        this.setState({
            loading : true
          });
    
          fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
          .then(res => res.json())
          .then(response => {
            this.setState({
                selectedPokemon : response,
            });
            const speciesRequest = `https://pokeapi.co/api/v2/pokemon-species/${selectedPokemon}`; 
                return fetch(speciesRequest);
          })
          .then(res => res.json())
          .then(response => {
            const description = response.flavor_text_entries.filter(e => e.language.name === "en").map(e => e.flavor_text)[0]
            console.log('flav: ',description);
            this.setState({
                description: description,
                loading : true,
                fetched : true
            });
          });
    }

    render() {
        const { fetched, description, loading, selectedPokemon } = this.state;

        return (
            <div>
                { fetched ? (
                    <div>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {description}
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.handleClose} color="primary" autoFocus>
                            Close
                        </Button>
                    </DialogActions>
                    </div>
                    ) : (
                        <p>Loading ...</p>
                    )}
                
            </div>  
        )
    }
}

export default PokemonProfile;