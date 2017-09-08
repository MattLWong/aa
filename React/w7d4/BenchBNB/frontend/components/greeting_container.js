import { connect } from 'react-redux';
import Greeting from './greeting';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting)
