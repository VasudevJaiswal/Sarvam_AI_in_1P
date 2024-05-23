// src/components/Filter.js
import React from 'react';

const Filter = ({ setFilter }) => {
  return (
    <div className="filter">
      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setFilter('free')}>Free</button>
      <button onClick={() => setFilter('paid')}>Paid</button>
    </div>
  );
};

export default Filter;
