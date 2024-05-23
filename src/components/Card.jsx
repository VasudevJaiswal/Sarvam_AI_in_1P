// src/components/Card.js
import React from 'react';

const Card = ({ title, description, image, link }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">Open Website</a>
    </div>
  );
};

export default Card;
