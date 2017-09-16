import { connect } from 'react-redux';
import BenchShow from './bench_show';
import { fetchBench } from '../../actions/bench_actions';
import { selectBench } from '../../reducers/selectors';

const mapStateToProps = (state, {match}) => {
  const benchId = parseInt(match.params.id);
  const bench = state.benches[benchId]
  return{
    benchId,
    bench
  }
}

const mapDispatchToProps = dispatch => ({
  fetchBench: (id) => dispatch(fetchBench(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BenchShow)
