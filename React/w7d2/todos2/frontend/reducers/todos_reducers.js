import merge from 'lodash/merge';
import { RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO, TODO_ERROR } from '../actions/todo_actions';

const todosReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type) {
    case RECEIVE_TODOS:
      nextState = {};
      //this is tricky!!
      action.todos.forEach( todo => nextState[todo.id] = todo);
      return nextState;
    case RECEIVE_TODO:
      //this is also tricky
      const newTodo = {[action.todo.id]: action.todo};
      return Object.assign({}, state, newTodo);
    case REMOVE_TODO:
      nextState = {}
      const keys = Object.keys(state);
      keys.forEach( (key) => {
        if (action.todo.id != key) {
          nextState[key] = state[key];
        }
      })
      return nextState;
    case TODO_ERROR:
      alert(action.error)
    default:
      return state;
  }
}

export default todosReducer;
