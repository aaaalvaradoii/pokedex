import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import CircularProgress from '@material-ui/core/CircularProgress';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';

class PokemonProfile extends Component {

    constructor(props){
        super(props);

        this.state = {
            selectedPokemon : [],
            fetched : false,
            loading : true,
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
            let description = response.flavor_text_entries.filter(e => e.language.name === "en").map(e => e.flavor_text)[0];

            this.setState({
                description: description,
                loading : false,
                fetched : true
            });
        });
    }

    render() {
        let { fetched, description, loading, selectedPokemon } = this.state;

        return (
            <div >
                {
                    (fetched && !loading) ? (
                        <div>
                            <Divider variant="middle" />
                            <DialogContent>
                                {selectedPokemon.types.map((species, i)=> {
                                    return (
                                        <Chip key={species} className="chip" label={`${species.type.name}`} />
                                    );
                                })}
                            </DialogContent>
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
                    )
                }
            </div>  
        )
    }
}

export default PokemonProfile;