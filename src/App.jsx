// src/components/App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import CardContainer from './components/CardContainer';
import Search from './components/Search';
import Filter from './components/Filter';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [tools, setTools] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filter, setFilter] = useState('All');
  const [filterOptions, setFilterOptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAllCategories, setShowAllCategories] = useState(false);

  useEffect(() => {
    fetch('https://script.google.com/macros/s/AKfycbwOAxbJp-h_hB1fPttBmEmkNXzu3V913i_NPxIrv0eAdJV0THFe0lpI9QrBeBcHLVBe/exec')
      .then(response => response.json())
      .then(data => {
        const fetchedData = data.data;
        setTools(fetchedData);
        setFilteredData(fetchedData);

        // Dynamically generate filter options from the `primary_task` field
        const uniqueCategories = [...new Set(fetchedData.map(item => item.primary_task))];
        setFilterOptions(['All', ...uniqueCategories.sort()]); // Include 'All' at the top
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filtered = tools
      .filter(card => filter === 'All' || card.primary_task === filter)
      .filter(card => card.company_name.toLowerCase().includes(lowerCaseSearchTerm));

    setFilteredData(filtered);
  }, [filter, tools, searchTerm]);

  return (
    <div className="App">
      <Header />
      <div className="controls">
        <Search setSearchTerm={setSearchTerm} />
        <Filter 
          filterOptions={filterOptions} 
          setFilter={setFilter} 
        />
      </div>
      <CardContainer data={filteredData} />
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
