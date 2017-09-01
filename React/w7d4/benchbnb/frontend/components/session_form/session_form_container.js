import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, login } from '../../actions/session_actions';

const mapStateToProps = (state ,ownProps) => ({
  loggedIn: state.session.currentUser ? true : false,
  errors: state.session.errors,
  ownProps
})

const mapDispatchToProps = (dispatch, ownProps) => {
  let choice = null;
  if (ownProps.location.pathname == "/login") {
    choice = login;
  } else {
    choice = signup;
  }
  return ({
    processForm: (user) => dispatch(choice(user))
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm)
