import { connect } from 'react-redux';
import { fetchBenches, fetchBench } from '../../actions/bench_actions';
import { updateFilter } from '../../actions/filter_actions';
import Search from './search';

const mapStateToProps = state => ({
  benches: state.benches,
  minSeating: state.filters.minSeating,
  maxSeating: state.filters.maxSeating
})

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  fetchBench: (bench) => dispatch(fetchBench(bench)),
  fetchBenches: () => dispatch(fetchBenches())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
