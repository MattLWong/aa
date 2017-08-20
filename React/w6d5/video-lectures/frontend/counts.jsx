import React from 'react';

class Counts extends React.Component {
  constructor(props){
    super(props)
  }
  // componentWillMount() {debugger}
  // componentDidMount() {debugger}
  // componentWillReceiveProps(nextProps) {debugger}
  // componentWillUpdate(nextProps, nextState) { debugger}
  // componentDidUpdate(prevProps, prevState) {debugger}
  // componentWillUnmount() {debugger}

  render() {
    return (
      <ul id='counts'>
        {this.props.counts.map( (el, idx) => <li key = {idx}>{el}</li>)}
      </ul>
    )
  }
}

// PURELY FUNCTION COMPONENT: NO STATE, ONLY PROPS, NO INTERNAL STATE

// const Counts = ({counts}) => {
//   return (
//     <ul>
//       {counts.map( count => <li>{count}</li>)}
//     </ul>
//   )
// };

export default Counts;
