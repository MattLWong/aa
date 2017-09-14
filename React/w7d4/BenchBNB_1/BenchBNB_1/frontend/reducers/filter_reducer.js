import { UPDATE_FILTER } from '../actions/filter_actions';

import merge from 'lodash/merge';

const defaultState = Object.freeze({
  bounds: {},
  minSeating: 1,
  maxSeating: 10
})

const FilterReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case UPDATE_FILTER:
      return merge({}, state, {[action.filter]: action.value})      
    default:
      return state;
  }
}

export default FilterReducer;
