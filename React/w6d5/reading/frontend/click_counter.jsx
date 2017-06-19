import React from 'react';
import Counts from './counts'
//don't need JSX because webpack resolves it; it's resolved

class ClickCounter extends React.Component {
  constructor(props) {
    super(props); //pass in the props if there are any
    this.state = { count: 0, previousCounts: [] }
  }

  click(event) {
    event.preventDefault();
    this.setState({ count: this.state.count + 1});
  }

  reset(event) {
    event.preventDefault();
    const previousCounts = this.state.previousCounts;
    previousCounts.push(this.state.count);
    //we can easily update a variable by naming it the same...
    //key === variable name
    this.setState({ count: 0, previousCounts });
  }

  render() {
    return (
      //this div will have 'data-reactroot'
      <div>
        <button onClick={this.click.bind(this)}>Click me!</button>
        <span>{this.state.count}</span>
        <br />
        <button onClick={this.reset.bind(this)}>Reset!</button>

        <Counts previousCounts={this.state.previousCounts} />
      </div>
    );
  }
}

export default ClickCounter;
