import React from 'react';
import Card from './Card';

const Cards = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <Card
          key={index}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
    </>
  );
};

export default Cards;