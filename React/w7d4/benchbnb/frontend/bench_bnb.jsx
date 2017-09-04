import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser }};
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});


//
import { login, signup, logout, receiveCurrentUser, receiveErrors } from './actions/session_actions';

window.login = login;
window.signup = signup;
window.logout = logout;
window.receiveCurrentUser = receiveCurrentUser;
window.receiveErrors = receiveErrors;

import { fetchBenches } from './util/bench_api_util';

window.fetchBenches = fetchBenches;