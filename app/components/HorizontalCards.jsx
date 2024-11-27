import React, { useRef } from 'react';

const HorizontalScrollableCards = ({ data1 }) => {
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="flex justify-between items-center py-4 p-12 mr-2">
      <button
        className="mr-12 p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
        onClick={() => handleScroll('left')}
      >
        <svg
          className="h-6 w-6 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <div
        ref={scrollContainerRef}
        className="flex flex-nowrap overflow-x-auto no-scrollbar -mx-4 snap-x snap-mandatory"
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') {
            handleScroll('left');
          } else if (e.key === 'ArrowRight') {
            handleScroll('right');
          }
        }}
        tabIndex={0}
      >
        {data1.map((card, index) => (
          <div key={index} className="flex-none w-60 h-40 px-1 snap-start transition-transform transform hover:scale-105 hover:shadow-lg">
            <div className="bg-black bg-opacity-70 rounded-lg shadow-lg h-25 flex flex-col justify-between ">
              {/* Title */}
              <h3 className="text-white text-base font-medium p-3 truncate">
                {card.title}
              </h3>
              {/* Image */}
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-20 object-cover rounded-b-lg"
              />
            </div>
          </div>
        ))}
      </div>

      <button
        className="ml-12 p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
        onClick={() => handleScroll('right')}
      >
        <svg
          className="h-6 w-6 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default HorizontalScrollableCards;