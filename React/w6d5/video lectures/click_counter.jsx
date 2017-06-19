import React from 'react';

class ClickCounter extends React.Component {
  constructor(props) {
    super(props); //pass in the props if there are any
    this.state = { count: 0 }
  }

  click(event) {
    event.preventDefault();
    this.setState({ count: this.state.count + 1})
  }

  render() {
    return (
      <div>
        <button onClick={this.click.bind(t his)}>Click me!</button>
        <span>{this.state.count}</span>
      </div>
    );
  }
}

export default ClickCounter;
