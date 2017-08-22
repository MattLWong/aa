import { createStore } from 'redux';
import RootReducer from '../reducers/root_reducer';

const configureStore = function() {
  const store = createStore(RootReducer);
  return store;
};

export default configureStore;
