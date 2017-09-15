import React from 'react';
import BenchMap from '../bench_map/bench_map';
import { Link } from 'react-router-dom';

const BenchShow = ({ bench, benchId, fetchBench }) => {
  const benches = {
    [benchId]: bench
  }
  return(
    <div className="single-bench-show">
      <Link to="/">Back to Benches Index</Link>

    </div>
  )
}

export default BenchShow;
