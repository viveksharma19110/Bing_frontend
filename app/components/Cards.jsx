import React from 'react';
import Card from './Card';

const Cards = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <div 
          key={index} 
          className="transition-transform transform hover:scale-105 hover:shadow-lg rounded-lg overflow-hidden  bg-white"
        >
          <Card
            image={item.image}
            title={item.title}
          />
        </div>
      ))}
    </>
  );
};

export default Cards;