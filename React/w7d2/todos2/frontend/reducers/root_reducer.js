import { combineReducers } from 'redux';

import todosReducer from './todos_reducers';
import stepsReducer from './steps_reducers';
import errorsReducer from './errors_reducer';

const RootReducer = combineReducers({
  todos: todosReducer,
  steps: stepsReducer,
  errors: errorsReducer
});

export default RootReducer;
