// src/components/CardContainer.js
import React, { useState } from 'react';
import Card from './Card';

const CardContainer = ({ data }) => {
  const [visibleCount, setVisibleCount] = useState(20);

  const handleShowMore = () => {
    setVisibleCount(visibleCount + 20); // Show 20 more cards on each click
  };

  return (
    <div className="card-container">
      {data.slice(0, visibleCount).map((card, index) => (
        <Card
          key={index}
          title={card.company_name}
          shortDescription={card.short_description}
          image={card.logo_url}
          pricing={card.pricing}
          visitWebsiteUrl={card.visit_website_url}
        />
      ))}
      {visibleCount < data.length && (
        <button onClick={handleShowMore} className="show-more-btn">
          Show More
        </button>
      )}
    </div>
  );
};

export default CardContainer;
