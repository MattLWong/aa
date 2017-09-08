import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const defaultState = { currentUser: null, errors: [] };

const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      if (action.user == null) {
        return defaultState;
      } else {
        return merge({}, {currentUser: { id: action.user.id, username: action.user.username }, errors: []});
      }
    case RECEIVE_ERRORS:
      return merge({}, { currentUser: null, errors: [...action.errors]})
    default:
      return state;
  }
}

export default sessionReducer;
