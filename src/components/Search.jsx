// src/components/Search.js
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = ({ setSearchTerm }) => {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setSearchTerm(e.target.value); // Pass the search term to the parent
  };

  return (
    <div className="search">
      <FaSearch className="search-icon" />
      <input
        type="text"
        placeholder="Search AI Tools"
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
