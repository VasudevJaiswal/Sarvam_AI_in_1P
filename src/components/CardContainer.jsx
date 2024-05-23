// src/components/CardContainer.js
import React from 'react';
import Card from './Card';

const CardContainer = ({ data }) => {
  return (
    <div className="card-container">
      {data.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          image={card.image}
          link={card.link}
        />
      ))}
    </div>
  );
};

export default CardContainer;
