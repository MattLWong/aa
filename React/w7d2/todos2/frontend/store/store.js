import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers/root_reducer';
import thunkMiddleware from '../middleware/thunk_middleware';

const configureStore = function() {
  if (window.localStorage.store) {
    console.log("We have local storage!");
    const prexistingStore = JSON.parse(window.localStorage.store);
    return createStore(
      RootReducer,
      prexistingStore,
      applyMiddleware(thunkMiddleware)
    );
    // const store = createStore(RootReducer, window.localStorage.store)
  } else {
    return createStore(RootReducer);
  }
};

export default configureStore;
