import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router';
import { Route } from 'react-router-dom';

const Auth = ({component: Component, path, loggedIn}) => {
  return(
    <Route path={path} render={(props) => (
        !loggedIn? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      )}/>
  );
};

const Protected = ({ component: Component, path, loggedIn }) => (
  <Route path={path} render={(props) => (
      loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    )} />
);

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser)
})

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth))

export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected))
