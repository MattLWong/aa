import React from 'react';

import GiphysIndex from './giphys_index';

class GiphysSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let searchTerm = this.state.searchTerm.split(' ').join("+");
    this.props.fetchSearchGiphys(searchTerm);
    this.setState({
      searchTerm: ""
    });
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({searchTerm: e.target.value})
  }

  render() {
    return (
      <div>
        <h1><a href='javascript:window.location.href=window.location.href'>Giphys Search</a></h1>
        <h3><em>Made with React/Redux</em></h3>

        <form className="search-bar">
            <input
            type="text"
            name="searchTerm"
            onChange={this.handleChange}
            value={this.state.searchTerm}/>
          <button type="submit" onClick={this.handleSubmit}>Search Giphy</button>
        </form>
        <GiphysIndex giphys={this.props.giphys}/>
      </div>
    )
  }
}

export default GiphysSearch;
