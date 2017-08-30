import { combineReducers } from 'redux';
import merge from 'lodash/merge';

// import errors from './errors_reducer';
// import loading from './loading_reducer';
import pokeDisplayReducer from './poke_display_reducer';
//
const uiReducer = combineReducers({
//   errors,
//   loading,
  pokeDisplay: pokeDisplayReducer
});

export default uiReducer;
