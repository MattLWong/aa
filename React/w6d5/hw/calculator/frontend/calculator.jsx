import React from 'react'

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {result: "", num1: "", num2: ""}
    this.updateFirst = this.updateFirst.bind(this);
    this.updateSecond = this.updateSecond.bind(this);
    this.clear = this.clear.bind(this);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
  }

  // componentWillUpdate(nextProps, nextState) {debugger}

  updateFirst(event){
    event.preventDefault();
    let num1 = event.target.value;
    num1 = parseInt(num1);
    if (isNaN(num1)){

      this.setState({num1 : ""})
    } else {
      this.setState({num1})
    }
  }

  updateSecond(event){
    event.preventDefault();
    let num2 = event.target.value;
    num2 = parseInt(num2);
    if (isNaN(num2)){
      this.setState({num2 : ""})
    } else {
      this.setState({num2})
    }
  }

  clear(event){
    event.preventDefault();
    this.setState({num1: "", num2: ""});
  }

  add(event){
    event.preventDefault();
    this.setState({result : (parseInt(this.state.num1) + parseInt(this.state.num2))})
  }

  subtract(event){
    event.preventDefault();
this.setState({result : (parseInt(this.state.num1) - parseInt(this.state.num2))})
  }

  multiply(event){
    event.preventDefault();
this.setState({result : (parseInt(this.state.num1) * parseInt(this.state.num2))})
  }

  divide(event){
    event.preventDefault();
this.setState({result : (parseInt(this.state.num1) / parseInt(this.state.num2))})
  }

  render() {
    const {num1, num2, result } = this.state;
    return(
      <div>
        <h1>Calculator</h1>
        <h3>Result <span>{result}</span></h3>
        <input type="text" onChange={this.updateFirst} value={num1}/>
        <input type="text" onChange={this.updateSecond} value={num2}/>
        <br/>
        <button onClick={this.clear}>Clear</button>
        <button onClick={this.add}>+</button>
        <button onClick={this.subtract}>-</button>
        <button onClick={this.multiply}>*</button>
        <button onClick={this.divide}>/</button>
      </div>
    )
  }
}

export default Calculator;
