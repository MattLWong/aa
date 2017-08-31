import { RECEIVE_POKEMON_ERRORS } from '../actions/pokemon_actions';

const errorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_POKEMON_ERRORS:
      debugger;
      return [...action.errors];
    default:
      return state;
  }
}

export default errorsReducer;
