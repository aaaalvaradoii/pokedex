import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import CircularProgress from '@material-ui/core/CircularProgress';
import Divider from '@material-ui/core/Divider';

class PokemonProfile extends Component {

    constructor(props){
        super(props);

        this.state = {
            selectedPokemon : [],
            fetched : false,
            loading : false,
            description : "",
            types: []
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
            let types = response.types.map(e => e.type.name);
            this.setState({
                selectedPokemon : response,
                types: types
            });
            const speciesRequest = `https://pokeapi.co/api/v2/pokemon-species/${selectedPokemon}`; 
                return fetch(speciesRequest);
          })
          .then(res => res.json())
          .then(response => {
            const description = response.flavor_text_entries.filter(e => e.language.name === "en").map(e => e.flavor_text)[0];

            this.setState({
                description: description,
                loading : true,
                fetched : true
            });
          });
    }

    render() {
        const { fetched, description, types, loading, selectedPokemon } = this.state;
        console.log('TYPES: ',types);
        return (
            <div>
                { fetched ? (
                    <div>
                    <DialogContent>
                        <DialogContentText>
                            {selectedPokemon.types.map(e=>(
                                e.type.name
                            ))}
                        </DialogContentText>
                    </DialogContent>
                    <Divider variant="middle" />
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
                        <div className="progress">
                        <CircularProgress color="secondary" />
                        </div>
                    )}
                
            </div>  
        )
    }
}

export default PokemonProfile;