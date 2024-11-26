import React from 'react';

const Scroll = ({ children }) => {
  return (
    <div className="overflow-x-auto whitespace-nowrap bg-black/50 py-4 px-2">
      {children}
    </div>
  );
};

export default Scroll;