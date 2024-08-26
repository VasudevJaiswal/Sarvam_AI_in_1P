// src/components/Filter.js
import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ filterOptions, setFilter }) => {
  return (
    <div className="filter">
      <select onChange={(e) => setFilter(e.target.value)}>
        {filterOptions.map(option => (
          <option key={option} value={option}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

Filter.propTypes = {
  filterOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default Filter;
