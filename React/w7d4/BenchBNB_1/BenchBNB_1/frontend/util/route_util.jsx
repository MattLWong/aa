import React from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

// const Auth = ({ component: Component, path, loggedIn }) => {

const Auth = ({ component: Component, path, loggedIn }) => {
  debugger;
  return(
    <Route path={path} render={ (props) => {
        debugger;
        return(
            !loggedIn ? (
              <Component {...props} />
            ) : (
              <Redirect to="/" />
            )
          )
      }}/>
    )
}

const Pro = ({ component: Component, path, loggedIn }) => {
  return(
    <Route path={path} render={ (props) => {
      return(
        !loggedIn ? (
          <Redirect to="/login" />
        ) : (
          <Component {...props} />
        )
      )
      }}/>
  )
}

const mapStateToProps = state => {
  return {loggedIn: Boolean(state.session.currentUser)};
}

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Pro));
