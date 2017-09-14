import React from 'react';

const handleChange = (property, method) => e => (
  method(property, e.target.value)
)

const FilterForm = ({minSeating, maxSeating, updateFilter}) => (
  <div>
    <span className="filter">Filter results:</span>
    <br/>
      <label>
        Min Seating:
        <input
          type="number"
          value={minSeating}
          onChange={handleChange('minSeating', updateFilter)}
          />
      </label>
      <label>
        Max Seating:
        <input
          type="number"
          value={maxSeating}
          onChange={handleChange('maxSeating', updateFilter)}
          />
      </label>
  </div>
)
//
// class FilterForm extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       minSeating: this.props.minSeating,
//       maxSeating: this.props.maxSeating
//     }
//   }
//
//   update(property) {
//     return e => {
//       this.setState({[property]: e.target.value})
//       this.props.updateFilter(property, this.state[property]);
//     }
//   }
//
//   render() {
//     return(
//         <div>
//           <h3>Filter</h3>
//
//         </div>
//     )
//   }
// }

export default FilterForm;
