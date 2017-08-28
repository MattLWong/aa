import React from 'react';

const GiphysIndexItem = ({giphy}) => {
  return(
    <iframe src={giphy.embed_url} className="giphy-embed" frameBorder="0"></iframe>
  )

}

export default GiphysIndexItem;
