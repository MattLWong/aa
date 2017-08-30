import { RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';

const pokeDisplayReducer = (state = null, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_SINGLE_POKEMON:
      return action.payload.pokemon.id;
    default:
      return state;
  }
}

export default pokeDisplayReducer;
