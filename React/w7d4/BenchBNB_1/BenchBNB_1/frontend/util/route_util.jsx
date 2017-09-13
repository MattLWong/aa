import React from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const Auth = ({ component: Component, path, loggedIn }) => {
  // debugger;
  return(
    <Route path={path} render={ (props) => {
        // debugger;
        return(
            !loggedIn ? (
              <Component {...props} />
            ) : (
              <Redirect to="/" />
            )
          )
      }
      } />
    )

}

const mapStateToProps = state => {
  return {loggedIn: Boolean(state.session.currentUser)};
}

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
