import { fetchBenches } from './bench_actions'

export const UPDATE_FILTER = 'UPDATE_FILTER';

export const changeFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});

// this is a thunk action creater, where does it get dispatch and getState from?
export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  return fetchBenches(getState().filters)(dispatch);
};
