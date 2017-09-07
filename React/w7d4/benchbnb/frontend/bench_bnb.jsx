import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM fully loaded");
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Loaded</h1>, root);
});
