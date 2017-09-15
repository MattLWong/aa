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

export default FilterForm;
