import React from 'react';
import Cards from './Cards';


const Scroll = ({ data }) => {
  return (
    <div className="flex justify-center py-0">
      <div className="bg-white bg-opacity-80 rounded-lg shadow-lg w-full max-w-7xl h-[80vh] overflow-auto no-scrollbar">
        <h1 className='text-black font-semibold ml-4 mt-2 '>DISCOVER</h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-4">
          <Cards data={data} />
        </div>
      </div>
    </div>
  );
};

export default Scroll;