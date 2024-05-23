// src/components/Search.js
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // Import the search icon

const Search = ({ data, setData }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    // Filter data based on title or description containing the searchTerm
    const filteredData = data.filter(card =>
      card.title.toLowerCase().includes(searchTerm) ||
      card.description.toLowerCase().includes(searchTerm)
    );
    setData(filteredData);
  };

  return (
    <div className="search">
      <FaSearch className="search-icon" /> {/* Add the search icon */}
      <input
        type="text"
        placeholder="Search AI "
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
