import React from "react";
import { CiLocationOn } from "react-icons/ci"; 

const LocationComponent = () => {
  const locationName = "Delhi";

  return (
    <div className="absolute top-[53%] right-[7%] transform -translate-y-1/2 flex items-center gap-1">
      {/* Location Name Div */}
      <div className="flex px-4 py-2 bg-black/70 text-white rounded-md">
        {/* Location Icon (Using React Icon) */}
        <CiLocationOn className="display flex items-start w-5 h-5 mr-2" />
        {/* Location Name */}
        <span className="text-base">{locationName}</span>
      </div>

      {/* Left Arrow Button Div */}
      <div className="flex items-center justify-center px-4 py-1.5 bg-black/70 text-white rounded-md cursor-pointer hover:bg-black/80 transition">
        <span className="text-lg">&lt;</span>
      </div>

      {/* Right Arrow Button Div */}
      <div className="flex items-center justify-center px-4 py-1.5 bg-black/70 text-white rounded-md cursor-pointer hover:bg-black/80 transition">
        <span className="text-lg">&gt;</span>
      </div>
    </div>
  );
};

export default LocationComponent;
