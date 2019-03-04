import React, { Component } from 'react';
import Pokemon from './Pokemon';
import LinearProgress from '@material-ui/core/LinearProgress';

class PokemonList extends Component{
	
	constructor(props){
		super(props);

		this.state = {
			species : [],
			fetched : false,
			loading : true
	  }
	}

	componentWillMount() {
		this.setState({
			loading : true
		});

		fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
		.then(res => res.json())
		.then(response => {
			this.setState({
				species : response.results,
				fetched : true,
				loading : false
			});
		});
	}
  
	render() {
		let { fetched, species, loading } = this.state;

		return (
			<div className="container">
				{ 
					(fetched && !loading ) ? (
						<div className="pokemon-species-list">
							{
								species.map((pokemon, i) => (
									<Pokemon key={pokemon.name} id={i+1} pokemon={pokemon}/>)
								)
							}
						</div>
					) : (
						<div>
							<LinearProgress color="secondary"/>
						</div>
					)
				}
			</div>
		);
	}
  }

export default PokemonList;