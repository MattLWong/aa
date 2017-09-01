import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';

const SessionReducer = (state = {currentUser: null, errors: []}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      debugger;
      return merge({}, {currentUser: action.currentUser, errors: []});
    case RECEIVE_ERRORS:
      debugger;
      return merge({}, {currentUser: null, errors: action.errors});
    default:
      return state;
  }
}


export default SessionReducer;
