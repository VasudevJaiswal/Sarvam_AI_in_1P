// src/components/Card.js
import React from 'react';

const Card = ({ title, shortDescription, image, pricing, visitWebsiteUrl }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{shortDescription}</p>
      <p>Pricing: {pricing}</p>
      <a href={visitWebsiteUrl} target="_blank" rel="noopener noreferrer" className="view-website-btn">
        View Website
      </a>
    </div>
  );
};

export default Card;
