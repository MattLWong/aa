import React from 'react';

window.me = null;

export default class Autocomplete extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputVal : ""
    }
    this.changeVal = this.changeVal.bind(this);
    this.select = this.select.bind(this);
  }

  changeVal(event) {
    event.preventDefault();
    this.setState({inputVal: event.target.value})
  }

  getMatches() {
    if (this.state.inputVal == "") {
      return this.props.names;
    } else {
      const matches = [];
      this.props.names.forEach( (name) => {
        const sub = name.substring(0, this.state.inputVal.length);
        if (sub.toLowerCase() == this.state.inputVal.toLowerCase()) {
          matches.push(name);
        }
      })
      return matches;
    }
  }

  select(event) {
    event.preventDefault;
    me = event.target.innerText;
    this.setState({
      inputVal : me
    })
  }

  render() {
    let matchItems = [];
    this.getMatches().forEach( (item, idx) => {
      matchItems.push(<li key={idx} onClick={this.select}>{item}</li>)
    })
    const div = <div>
      <h1>Autocomplete</h1>
      <input
        onChange={this.changeVal}
        placeholder="Enter text..."
        value={this.state.inputVal}/>
      <ul>
        {matchItems}
      </ul>
    </div>

    return div
  }
}



































//
//
// export default class Autocomplete extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       inputVal: ''
//     };
//     this.selectName = this.selectName.bind(this);
//     this.handleInput = this.handleInput.bind(this);
//   }
//
//   handleInput(event) {
//     debugger;
//     this.setState({inputVal: event.currentTarget.value});
//   }
//
//   matches() {
//     const matches = [];
//     if (this.state.inputVal.length === 0) {
//       return this.props.names;
//     }
//
//     this.props.names.forEach(name => {
//       let sub = name.slice(0, this.state.inputVal.length);
//       if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
//         matches.push(name);
//       }
//     });
//
//     if (matches.length === 0) {
//       matches.push('No matches');
//     }
//
//     return matches;
//   }
//
//   selectName(event) {
//     let name = event.currentTarget.innerText;
//     this.setState({inputVal: name});
//   }
//
//   render() {
//     // convert array to list items
//     let results = this.matches().map((result, i) => {
//       return (
//         // specify what happens when you click an li
//         <li key={i} onClick={this.selectName}>{result}</li>
//       );
//     });
//     return(
//       <div>
//         <h1>Autocomplete</h1>
//         <div className='auto'>
//           <input
//             onChange={this.handleInput}
//             value={this.state.inputVal}
//             placeholder='Search...'/>
//           <ul>
//               {results}
//           </ul>
//         </div>
//       </div>
//     );
//   }
// };
