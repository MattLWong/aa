import { connect } from 'react-redux';
import BenchShow from './bench_show';
import { fetchBench } from '../../actions/bench_actions';
import { selectBench } from '../../reducers/selectors';

const mapStateToProps = (state, {match}) => {
  debugger;
  const benchId = parseInt(match.params.id)
  const bench = selectBench(state, match.params.id)
  return({
    benchId,
    bench
  })

}

const mapDispatchToProps = dispatch => ({
  fetchBench: (bench) => dispatch(fetchBench(bench))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BenchShow)
