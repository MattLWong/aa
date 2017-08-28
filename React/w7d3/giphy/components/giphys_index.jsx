import React from 'react';

import GiphysIndexItem from './giphys_index_item';

class GiphysIndex extends React.Component {
  render() {
    const items = this.props.giphys.map( (giphy, idx) => {
      return <li key={idx}><GiphysIndexItem giphy={giphy}/></li>
    })
    return(
      <ul>
        {items}
      </ul>
    )
  }
}

export default GiphysIndex;
