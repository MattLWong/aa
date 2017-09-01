export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

import * as APIUtil from '../util/session_api_util';

export const login = user => dispatch => (
  APIUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)))
    .fail(err => (dispatch(receiveErrors(err.responseJSON))))
);

export const logout = () => dispatch => {
  APIUtil.logout()
    .then( (prevUser) => dispatch(receiveCurrentUser(null)))
}

export const signup = user => {
  APIUtil.signup(user)
    .then( user => dispatch(receiveCurrentUser(user))),
    err => (dispatch(receiveErrors(err.responseJSON)))
}

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});
