import React from 'react';
import Counts from './counts';

class ClickCounter extends React.Component {
  constructor(props) {
    super(props); //pass in the props if there are any
      // there are no props to pass
    this.state = { count: 0, history: [] }

    this.click = this.click.bind(this);
    this.reset = this.reset.bind(this);
  }

  click(event) {
    event.preventDefault();
    this.setState({ count: this.state.count + 1})
  }

  reset(event){
    event.preventDefault();
    this.state.history.push(this.state.count);
    this.setState({count : 0});
    //setState doesn't change the other properties of object
  }

  render() {
    return (
      <div>
        <button onClick={this.click}>Click me!</button>
        <span>{this.state.count}</span><br/>
        <button onClick={this.reset}>Reset</button>
        <Counts counts={this.state.history}/>
      </div>
    )
  }
}

export default ClickCounter;
