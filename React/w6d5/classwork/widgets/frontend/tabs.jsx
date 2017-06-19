import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h1>Tabs</h1>
        <div className="tab-header"></div>
          <ul>
            {this.props.tabs.map( (obj, idx) => (
              <li key={idx}>{Object.keys(obj)}</li>
            ))}
          </ul>
        <div className="tab-content"></div>
      </div>
    )
  }
}

export default Tabs;
