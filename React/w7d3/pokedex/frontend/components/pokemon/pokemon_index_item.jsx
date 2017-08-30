import React from 'react';
import { Link } from 'react-router-dom';

class PokemonIndexItem extends React.Component {
  render() {
    const { pokemon } = this.props;
    return(
      <li className="pokemon-index-item">
        <Link to={`/pokemon/${pokemon.id}`}>
          <p>{pokemon.name}</p>
          <p>{pokemon.image_url}</p>
        </Link>
      </li>
    )
  }
}

export default PokemonIndexItem;
