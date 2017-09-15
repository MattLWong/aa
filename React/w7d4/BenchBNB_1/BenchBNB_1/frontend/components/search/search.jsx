import React from 'react';

import BenchMap from '../bench_map/bench_map';
import BenchIndex from './bench_index';
import FilterForm from './filter_form';

class Search extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { benches, fetchBenches, updateFilter, fetchBench } = this.props
    return(
      <div className="search">
        <BenchMap
          benches={benches}
          updateFilter={updateFilter}
          fetchBench={fetchBench}/>
        <FilterForm
          minSeating={this.props.minSeating}
          maxSeating={this.props.maxSeating}
          updateFilter={updateFilter}
          />
        <BenchIndex
          benches={benches}
          fetchBenches={fetchBenches}/>
      </div>
    )

  }
}

export default Search;
