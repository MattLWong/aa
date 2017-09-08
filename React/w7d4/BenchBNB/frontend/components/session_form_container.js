import { connect } from 'react-redux';
import { login, signup } from '../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  let formType;
  if (ownProps.match.path == "/signup") {
    formType = "signup"
  } else {
    formType = "login"
  }
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors,
    formType
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  if (ownProps.match.path == "/signup") {
    return {
      processForm: (user) => dispatch(signup(user))
    }
  } else {
    return {
      processForm: (user) => dispatch(login(user))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm)
