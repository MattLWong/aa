import React from 'react';
import { Provider } from 'react-redux';
import App from './app';

//the root wraps provider over the app

const Root = ({store}) => (
  <Provider store={store}>
    <App/>
  </Provider>
)

export default Root;
