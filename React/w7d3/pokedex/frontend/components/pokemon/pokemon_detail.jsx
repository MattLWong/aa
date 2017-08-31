import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import Item from '../items/item';
import ItemDetailContainer from '../items/item_detail_container';

class PokemonDetail extends Component {

  componentDidMount(){
    console.log("Pokemon Detail did Mount, will request single pokemon");
    console.log("Pokemon ID: " + this.props.match.params.pokemonId);
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps){
    console.log("Pokemon Detail will receive Props");
    console.log("New Props: " + newProps.match.params.pokemonId);
    if (this.props.match.params.pokemonId != newProps.match.params.pokemonId) {
      console.log("Old props don't match new props");
      this.props.requestSinglePokemon(newProps.match.params.pokemonId)
    }
  }

  render() {
    console.log("Rendered Pokemon Detail");
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
            {items.map( (item, idx) => <Item key={item.name} item={item}/>)}
          </ul>
        </section>
        <Route path="/pokemon/:pokemonId/item/:itemId" component={ItemDetailContainer} />

      </section>
    )
  }
}

export default PokemonDetail;
