import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import PokemonFormContainer from './pokemon_form_container';

class PokemonIndex extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    console.log("PokemonIndex did mount, will now request all pokemon");
    this.props.requestAllPokemon();
  }

  render() {
    console.log("Rendered Pokemon Index");
    const { pokemon } = this.props;
    return(
      <section className="pokedex">
        <ul>
          {pokemon.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke} />)}
        </ul>
        <Route exact path="/" component={PokemonFormContainer} />
        <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
      </section>
    )
  }
}

export default PokemonIndex;
