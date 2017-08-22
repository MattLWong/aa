import { combineReducers } from 'redux';
import todosReducer from './todos_reducers';

const RootReducer = combineReducers({
  todos: todosReducer
});

export default RootReducer;
