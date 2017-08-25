import { combineReducers } from 'redux';
import todosReducer from './todos_reducers';
import stepsReducer from './steps_reducers';

const RootReducer = combineReducers({
  todos: todosReducer,
  steps: stepsReducer
});

export default RootReducer;
