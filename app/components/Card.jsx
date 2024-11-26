import React from 'react';

const Card = ({ image, title, description }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-white">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;