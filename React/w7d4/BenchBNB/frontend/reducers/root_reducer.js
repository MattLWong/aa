import { combineReducers } from 'redux'
import sessionReducer from './session_reducer';
import benchesReducer from './benches_reducer';
import FiltersReducer from './filters_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  filters: FiltersReducer,
  benches: benchesReducer
})

export default rootReducer;
