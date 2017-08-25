import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { receiveTodos, receiveTodo, removeTodo, fetchTodos, createTodo } from './actions/todo_actions';
import Root from './components/root';
import { allTodos, allSteps } from './reducers/selectors';
import RootReducer from './reducers/root_reducer';
import {receiveStep, receiveSteps, removeStep} from './actions/step_actions';

const store = configureStore();
store.subscribe(
  () => {
    console.log("subscribed");
    window.localStorage.setItem("store", JSON.stringify(store.getState()));
  }
)

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
});

// const newTodos = [
//   { id: 1, task: "run" },
//   { id: 2, task: "bake"}
// ]
window.store = store;
window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;
window.removeTodo = removeTodo;
window.fetchTodos = fetchTodos;
window.fetchTodos = fetchTodos;
window.createTodo = createTodo;
// window.allTodos = allTodos;
