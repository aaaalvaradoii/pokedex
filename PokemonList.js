import React, { Component } from 'react';
import Pokemon from './Pokemon';

class PokemonList extends Component{
    
    constructor(props){
      super(props);

      this.state = {
        species : [],
        fetched : false,
        loading : false,
      }
    }

    componentDidMount() {
      this.setState({
        loading : true
      });

      fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(res => res.json())
      .then(response => {
        this.setState({
          species : response.results,
          loading : true,
          fetched : true
        });
      });
    }
  
    render() {
      const {fetched, loading, species} = this.state;
    //   let content;

    //   let content = fetched ? 

    //   if(fetched){
    //     content = <div className="pokemon--species--list">{species.map((pokemon,index)=><Pokemon key={pokemon.name} id={index+1} pokemon={pokemon}/>)}</div>;
    //   }
    //   else if (loading && !fetched) {
    //       content = <p>Loading ...</p>;
    //   }
    //   else {
    //     content = <div/>;
    //   }

      return (
        <div>
            { fetched ? (
                <div className="pokemon-species-list"> {
                    species.map((pokemon,index) => (
                        <Pokemon key={pokemon.name} id={index+1} pokemon={pokemon}/>)
                    )
                }
                </div>
            ) : (
                <p>Loading ...</p>
            )}
            {/* {content} */}
        </div>
      );
    }
  }

export default PokemonList;