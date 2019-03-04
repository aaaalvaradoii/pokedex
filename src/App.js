import React, { Component } from 'react';
import PokemonList from './PokemonList';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      loading : true,
    }
  }


  componentWillMount() {
    // set an initial loading state and a 0.5 second timeout first as a workaround to an issue causing Material UI's styling to not render immediately; similar to this issue https://github.com/mui-org/material-ui/issues/8040
    // setTimeout(() => {
    //   this.setState({ loading: false });
    // }, 0);
  }

  render() {
    let { loading } = this.state;
    loading = false
    
    return (
      <div >
        {/* using a ternary operator for conciseness while waiting for the timer to finish */}

        <div>
          <AppBar position="sticky" color="secondary" className="nowhitespace">
            <Toolbar>
              <Typography variant="h6" color="inherit">
                PokeDex - Generation 1
              </Typography>
            </Toolbar>
          </AppBar>
          <PokemonList />
        </div>

      </div>
    );
  }
}

export default App;
