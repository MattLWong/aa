import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';

import Root from './components/root';
import { HashRouter, Route } from 'react-router-dom';

window.store = null;

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, rootEl);
})

import { RECEIVE_ALL_POKEMON, receiveAllPokemon, requestAllPokemon, requestSinglePokemon } from './actions/pokemon_actions';
import { fetchAllPokemon, fetchSinglePokemon } from './util/api_util';
import { selectAllPokemon, selectPokeItems } from './reducers/selectors';
window.receiveAllPokemon = receiveAllPokemon;
window.fetchAllPokemon = fetchAllPokemon;
window.fetchSinglePokemon = fetchSinglePokemon;
window.requestAllPokemon = requestAllPokemon;
window.selectAllPokemon = selectAllPokemon;
window.requestSinglePokemon = requestSinglePokemon;
window.selectPokeItems = selectPokeItems;
