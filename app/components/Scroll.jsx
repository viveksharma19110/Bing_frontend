import React from 'react';
import Cards from './Cards';

const Scroll = ({ data }) => {
  return (
    <div className="flex justify-center py-8">
      <div className="bg-white bg-opacity-80 rounded-lg shadow-lg w-full max-w-6xl h-[80vh] overflow-y-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8">
          <Cards data={data} />
        </div>
      </div>
    </div>
  );
};

export default Scroll;