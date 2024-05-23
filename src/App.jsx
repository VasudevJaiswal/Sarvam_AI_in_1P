// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import CardContainer from './components/CardContainer';
import Search from './components/Search';
import Filter from './components/Filter';
import Footer from './components/Footer'; // Import the Footer component
import data from './data/data'; // Import your data

function App() {
  const [filteredData, setFilteredData] = useState(data);
  const [filter, setFilter] = useState('all');

  const handleDataChange = (filteredData) => {
    setFilteredData(filteredData);
  };

  useEffect(() => {
    // Filter data based on category filter
    if (filter === 'all') {
      setFilteredData(data);
    } else {
      const filteredData = data.filter(card => card.category === filter);
      setFilteredData(filteredData);
    }
  }, [filter]);

  return (
    <div className="App">
      <Header />
      <div className="controls">
        <Search data={data} setData={handleDataChange} />
        <Filter setFilter={setFilter} />
      </div>
      <div className="card-container">
        {filteredData.map(card => (
          <div className="card" key={card.title}>
            <img src={card.image} alt={card.title} />
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <a href={card.link} target="_blank" rel="noopener noreferrer">View Details</a>
          </div>
        ))}
      </div>
      <Footer /> {/* Add the Footer component */}
    </div>
  );
}

export default App;
