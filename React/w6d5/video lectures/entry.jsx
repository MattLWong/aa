import React from 'react';
import ReactDOM from 'react-dom';

import ClickCounter from './click_counter';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render(<ClickCounter />, root);
});
