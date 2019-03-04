import React, { Component } from 'react';
import PokemonList from './PokemonList';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


class App extends Component {

		render() {
				return (
						<div >
								<AppBar position="sticky" color="secondary" className="nowhitespace">
										<Toolbar>
												<Typography variant="h6" color="inherit">
														PokeDex - Generation 1
												</Typography>
										</Toolbar>
								</AppBar>
								<PokemonList />
						</div>
				);
			}
}

export default App;
