import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

// const addLoggingToDispatch = (store) => {
//   let OGdispatch = store.dispatch;
//   return (action) => {
//     console.log(store.getState());
//     console.log(action);
//     OGdispatch(action);
//     console.log(store.getState());
//   }
// }

// Phase 2: Refactoring (without Using Redux applyMiddleware)



const applyMiddlewares = (store, ...middlewares) => {
  let dispatch = store.dispatch;
  middlewares.forEach((middleware) => {
    dispatch = middleware(store)(dispatch);
  });
  return Object.assign({}, store, { dispatch });
};

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  let store = configureStore(preloadedState);
  // store = applyMiddlewares(store, addLoggingToDispatch);
  // store.dispatch = addLoggingToDispatch(store)(store.dispatch);
  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});
