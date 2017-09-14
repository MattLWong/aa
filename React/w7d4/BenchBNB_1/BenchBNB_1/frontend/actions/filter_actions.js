import { fetchBenches } from './bench_actions';

export const UPDATE_BOUNDS = "UPDATE_BOUNDS";

export const updateBounds = (bounds) => ({
  type: UPDATE_BOUNDS,
  bounds
})

export const updateFilter = (bounds, value) => (dispatch, getState)  => {
  dispatch(updateBounds(bounds));
  return fetchBenches({bounds: getState().filters.bounds})(dispatch);
}
