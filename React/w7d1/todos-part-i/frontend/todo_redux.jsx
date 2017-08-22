import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
window.store = configureStore();

const Widget = () => {
  return <h1>In redux!</h1>
}

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<Widget />, document.getElementById('root'));
});
