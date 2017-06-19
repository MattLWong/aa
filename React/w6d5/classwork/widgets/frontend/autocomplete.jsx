import React from 'react';


export default class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ''
    };
    this.selectName = this.selectName.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({inputVal: event.currentTarget.value});
  }

  matches() {
    const matches = [];
    if (this.state.inputVal.length === 0) {
      return this.props.names;
    }

    this.props.names.forEach(name => {
      let sub = name.slice(0, this.state.inputVal.length);
      if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
        matches.push(name);
      }
    });

    if (matches.length === 0) {
      matches.push('No matches');
    }

    return matches;
  }

  selectName(event) {
    let name = event.currentTarget.innerText;
    this.setState({inputVal: name});
  }

  render() {
    let results = this.matches().map((result, i) => {
      return (
        <li key={i} onClick={this.selectName}>{result}</li>
      );
    });
    return(
      <div>
        <h1>Autocomplete</h1>
        <div className='auto'>
          <input
            onChange={this.handleInput}
            value={this.state.inputVal}
            placeholder='Search...'/>
          <ul>
              {results}
          </ul>
        </div>
      </div>
    );
  }
};
//
// class Autocomplete extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       inputVal: "",
//       matches: []
//     }
//     this.handleInput = this.handleInput.bind(this);
//     this.findMatches = this.findMatches.bind(this);
//   }
//
//   handleInput(event) {
//     event.preventDefault();
//     let that = this;
//     const inputVal = event.target.value;
//     this.setState({inputVal});
//     this.findMatches();
//   }
//
//   findMatches() {
//     //this takes the current inputVal and returns an array of names matching it
//     this.state.matches = [];
//     let that = this;
//     if (this.state.inputVal === "") {
//       this.state.matches = this.props.names;
//     } else {
//       let matches = [];
//       this.props.names.forEach( name => {
//         let letters = name.split("");
//         let subString = "";
//         for (let i = 0; i < that.state.inputVal.length; i++) {
//           subString += letters[i];
//         }
//         if(that.state.inputVal.toLowerCase() === subString.toLowerCase()) {
//           console.log("We have a match: " + subString);
//           matches.push(name);
//         }
//       })
//       this.state.matches = matches;
//     }
//   }
//
//   render() {
//     return (
//       <div>
//         <h1>Autocomplete Widget</h1>
//         <input value={this.state.inputVal} onChange={this.handleInput} />
//         <ul>
//           {this.state.matches.map( (name, i) => (
//             <li key={i}>{name}</li>
//           ))}
//         </ul>
//       </div>
//     )
//   }
// }
//
// export default Autocomplete;
