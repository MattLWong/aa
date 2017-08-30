import React, {Component} from 'react';
import { Route } from 'react-router-dom';

class PokemonDetail extends Component {

  componentDidMount(){
    debugger;
    this.props.requestSinglePokemon(this.props.match.params.pokemonId)
  }

  render() {
    const { pokemon, items } = this.props;

    if (!pokemon) return null;

    return (
      <section className="pokemon-detail">
        <figure>
          <img src={pokemon.image_url} alt={pokemon.name} />
        </figure>
        <ul>
          <li>
            <h2>{pokemon.name}</h2>
          </li>
          <li>Type: {pokemon.poke_type}</li>
          <li>Attack: {pokemon.attack}</li>
          <li>Defense: {pokemon.defense}</li>
          <li>Moves: {pokemon.moves.join(', ')}</li>
        </ul>
        <section className="toys">
          <h3>Items</h3>
          <ul>
            {items.map(item => <li>{item.name}</li>)}
          </ul>
        </section>
      </section>
    )
  }
}

export default PokemonDetail;
