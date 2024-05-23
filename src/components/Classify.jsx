// src/components/Classify.js
import React from 'react';

const Classify = ({ data }) => {
  // Classify data into sections
  const sections = {
    education: data.filter(item => item.category === 'education'),
    social: data.filter(item => item.category === 'social'),
    entertainment: data.filter(item => item.category === 'entertainment'),
    other: data.filter(item => item.category === 'other')
  };

  return (
    <div className="classify">
      <h2>Classified Data</h2>
      <div className="section">
        <h3>Education</h3>
        {sections.education.map(item => (
          <div key={item.title}>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
      <div className="section">
        <h3>Social</h3>
        {sections.social.map(item => (
          <div key={item.title}>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
      <div className="section">
        <h3>Entertainment</h3>
        {sections.entertainment.map(item => (
          <div key={item.title}>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
      <div className="section">
        <h3>Other</h3>
        {sections.other.map(item => (
          <div key={item.title}>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classify;
