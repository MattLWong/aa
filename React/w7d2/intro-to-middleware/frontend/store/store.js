import { createStore } from 'redux';
import RootReducer from '../reducers/root_reducer';
import { applyMiddleware } from 'redux';


const addLoggingToDispatch = store => next => action => {
  console.log(store.getState());
  console.log(action);
  next(action);
  console.log(store.getState());
};

const sillyMiddleware = store => next => action => {
  console.log("Silly");
  next(action);
};


const configureStore = (preloadedState = {}) => {
  const store = createStore(RootReducer, preloadedState,
    applyMiddleware(addLoggingToDispatch, sillyMiddleware));
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  return store;
}

export default configureStore;