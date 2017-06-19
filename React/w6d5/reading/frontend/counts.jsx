import React from 'react';

// class Counts extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
//     return (
//       <ul>
//         {
//           //we access the array by this.props.previousCounts
//           this.props.previousCounts.map(count => <li>{count}</li>)
//         }
//       </ul>
//     )
//   }
// }

//purely functional component: just requires props
// contains no state, does not bind variables
//parens indicate implicit return
//we destructured the props and now we have a pointer previousCounts
const Counts = ({ previousCounts }) => (
  //we are in the global namespace, not the class; this will point to the
  //window
  <ul>
    {
      previousCounts.map((count, idx) => <li key={idx}>{count}</li>)
    }
  </ul>
);

export default Counts;
