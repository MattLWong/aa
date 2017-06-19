import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = {result: 0, num1: "", num2: ""};
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
    this.clearValues = this.clearValues.bind(this);
  }

  //your code here
  setNum1(event){
    event.preventDefault();
    const num1 = parseInt(event.target.value);
    if (isNaN(num1)) {
      this.setState({num1: ""});
    } else {
      this.setState({num1});
    }
  }

  setNum2(event){
    event.preventDefault();
    const num2 = parseInt(event.target.value);
    if (isNaN(num2)) {
      this.setState({num2: ""});
    } else {
      this.setState({num2});
    }
  }

  add(event) {
    event.preventDefault();
    const result = this.state.num1 + this.state.num2;
    this.setState({result});
  }

  subtract(event) {
    event.preventDefault();
    const result = this.state.num1 - this.state.num2;
    this.setState({result});
  }

  multiply(event) {
    event.preventDefault();
    const result = this.state.num1 * this.state.num2;
    this.setState({result});
  }

  divide(event) {
    event.preventDefault();
    const result = this.state.num1 / this.state.num2;
    this.setState({result});
  }

  clearValues(event) {
    event.preventDefault();
    this.setState({num1: "", num2: "", result: 0});
  }

  render(){
    const { num1, num2, result } = this.state
    return (
      <div>
        <h1>{result}</h1>
        <br />

        <input value={num1} onChange={this.setNum1} />
        <input value={num2} onChange={this.setNum2} />
        <button onClick={this.clearValues}>Clear</button>
        <br />
        <button onClick={this.add}>+</button>
        <button onClick={this.subtract}>-</button>
        <button onClick={this.multiply}>*</button>
        <button onClick={this.divide}>/</button>
      </div>
    );
  }
}

export default Calculator;
