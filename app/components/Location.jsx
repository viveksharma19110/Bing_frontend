import React from "react";

const LocationComponent = () => {
  const locationName = "Delhi"; 

  return (
    <div className="absolute top-[63%] right-[7%] transform -translate-y-1/2 flex items-center gap-4">
      {/* Location Name Div */}
      <div className="flex items-center px-8 py-2 bg-black/70 text-white rounded-md">
        <span className="text-lg mr-2">📍</span>
        <span className="text-base">{locationName}</span>
      </div>

      {/* Left Arrow Button Div */}
      <div className="flex items-center justify-center px-4 py-2 bg-black/70 text-white rounded-md cursor-pointer">
        <span>&lt;</span>
      </div>

      {/* Right Arrow Button Div */}
      <div className="flex items-center justify-center px-4 py-2 bg-black/70 text-white rounded-md cursor-pointer">
        <span>&gt;</span>
      </div>
    </div>
  );
};

export default LocationComponent;
