import { connect } from 'react-redux';
import BenchShow from './bench_show';

const mapStateToProps = (state, {location}) => {
  return ({
    benchId: location.pathname.slice(9),
    bench: location.bench
  })
}

const mapDispatchToProps = dispatch => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BenchShow)
