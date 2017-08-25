import merge from 'lodash/merge';
import { RECEIVE_STEP, RECEIVE_STEPS, REMOVE_STEP } from '../actions/step_actions';

const stepsReducer = (state = {}, action) => {
  let nextState;
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_STEPS:
      nextState = merge({}, state);
      action.steps.forEach((step) => nextState[step.id] = step);
      return nextState;
    case RECEIVE_STEP:
      nextState = {};
      nextState = merge({}, state, { [action.step.id]: action.step });
      return nextState;
    case REMOVE_STEP:
      nextState = merge({}, state);
      delete nextState[action.step.id]
      return nextState
    default:
      return state;
  }
};

export default stepsReducer;
