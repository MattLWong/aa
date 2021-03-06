import { combineReducers } from 'redux';
import PokemonReducer from './pokemon_reducer';
import ItemsReducer from './items_reducer';

const entitiesReducer = combineReducers({
  pokemon: PokemonReducer,
  items: ItemsReducer
});

export default entitiesReducer;
