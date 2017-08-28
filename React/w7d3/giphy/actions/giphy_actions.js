import * as APIUtil from '../util/api_util';

export const RECEIVE_SEARCH_GIPHYS = 'RECEIVE_SEARCH_GIPHYS';
export const REQUEST_SEARCH_GIPHYS = 'REQUEST_SEARCH_GIPHYS';

export const receiveSearchGiphys = giphys => ({
  type: RECEIVE_SEARCH_GIPHYS,
  giphys
})

export const fetchSearchGiphys = (searchTerm, quantity) => (
  (dispatch) => {
    APIUtil.fetchSearchGiphys(searchTerm, quantity)
    .then(giphys => dispatch(receiveSearchGiphys(giphys.data)))
  }
)
