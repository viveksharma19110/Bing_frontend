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
    <div className="flex items-center py-4  ">
      <button
        className="mr-9 p-2   focus:outline-none"
        onClick={() => handleScroll('left')}
      >
        <svg
          className="h-10 w-10 text-white hover:text-gray-300 hover:bg-opacity-50"
          fill="none"
          viewBox="0 0 26 26"
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
        className="flex flex-nowrap overflow-x-auto no-scrollbar -mx-0 snap-x snap-mandatory"
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
        className="ml-9 p-2  focus:outline-none"
        onClick={() => handleScroll('right')}
      >
        <svg
          className="h-10 w-10 text-white hover:text-gray-300"
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