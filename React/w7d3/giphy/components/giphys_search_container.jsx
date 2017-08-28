import { connect } from 'react-redux';
import GiphysSearch from './giphys_search';
import { fetchSearchGiphys } from '../actions/giphy_actions';

const mapStateToProps = state => ({
  giphys: state.giphys
})

const mapDispatchToProps = dispatch => ({
  fetchSearchGiphys: (search, quantity) => dispatch(fetchSearchGiphys(search, quantity))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GiphysSearch);
