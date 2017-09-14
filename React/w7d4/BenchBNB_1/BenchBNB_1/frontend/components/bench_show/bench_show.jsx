import React from 'react';
import BenchMap from '../bench_map/bench_map';

const BenchShow = ({bench}) => {
  return(
    <div className="search">
      <BenchMap
        singleBench={bench}/>
    </div>
  )
}

export default BenchShow;
