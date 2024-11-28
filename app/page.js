"use client";
import React, { useState } from "react";
import { FaMessage } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import Navbar from "./components/Navbar";
import Scroll from "./components/Scroll";
import HorizontalCards from "./components/HorizontalCards";

const data = [
  {
    image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1uGjig.img?w=768&h=432&m=6&x=726&y=105&s=70&d=70",
    title: "Indian athlete who raised alarm about survival of sport in extreme conditions, at UN climate summit in Baku",
  },
  {
    image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1r7StG.img?w=768&h=432&m=6",
    title: "Spot 3 Differences Between Honeybee Pictures In 19 Seconds!",
  },
  {
    image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1uHfpw.img?w=768&h=432&m=6&x=300&y=232&s=42&d=42",
    title: "Prabhas' most-awaited films The Raja Saab and Kannappa are set to hit theaters in 2025 summer",
  },
  {
    image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1uKuXP.img?w=768&h=512&m=6",
    title: "Schools in Delhi-NCR to now operate in hybrid mode following SC's nudge'",
  },
  {
    image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1uIYwe.img?w=768&h=432&m=6&x=451&y=192&s=161&d=49",
    title: "DUSU Election Results 2024: NSUI Wins Presidency After 7 Years, ABVP Retains Vice-President And Secretary Posts",
  },
  {
    image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1uLiy6.img?w=768&h=432&m=6&x=174&y=124&s=66&d=66",
    title: "Humiliation': How Australian media reacted to India's sensational victorycom/image2.jpg",
  },
  {
    image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1uL10g.img?w=768&h=432&m=6&x=504&y=80&s=195&d=195",
    title: "Who Was Shashi Ruia, Co-Founder Of Rs 14 Billion Essar Group Spread Across 35 Nations",
  },
  {
    image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1tVd3m.img?w=800&h=435&q=60&m=2&f=jpg",
    title: "9 amazing benefits of drinking kishmish water every morning",
  },
  {
    image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1tbvOW.img?w=1920&h=1080&q=60&m=2&f=jpg",
    title: "10 most beautiful Indian villages",
  },
  {
    image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1k4uJp.img?w=768&h=512&m=6",
    title: "What To Do When A Snake Enters Your Room",
  },
  {
    image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1uKXIE.img?w=768&h=576&m=6",
    title: "How a nine-year-old 26/11 Mumbai terror attack survivor helped the justice system hang Ajmal Kasab",
  },
  {
    image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1pAPKh.img?w=768&h=432&m=6&x=18&y=115&s=536&d=258",
    title: "Eknath Shinde steps down amid suspense over next Maharashtra Chief Minister",
  },
];

const data1 = [
  {
    image: "https://resize.indiatvnews.com/en/centered/newbucket/1200_675/2024/11/tata-sierra-1732595549.webp",
    title: "Next-gen Tata Sierra spotted, launch next year",
  },
  {
    image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1uNkRG.img?w=600&h=450&m=6",
    title: "Morgan Stanley buys shares worth Rs 3.74 crore in this smallcap stock via block deal",
  },
  {
    image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1uMFwJ.img?w=768&h=541&m=6",
    title: "Ola Gig, S1 Z range of scooters launched in India starting at Rs 39,999",
  },
  {
    image: "https://images.indianexpress.com/2024/11/arijit.jpg?w=640",
    title: "Arijit Singh got a duplex in Mumbai for performing at a wedding, AR Rahman charges Rs 3 cr for a live performance: Ikka",
  },
  {
    image: "https://resize.indiatvnews.com/en/centered/newbucket/1200_675/2024/11/aadhaar-card-1726225029-1732672191.webp",
    title: "Aadhaar Card Update: This is the last date for free online update- Step-by-step guide",
  },
  {
    image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1uLiy6.img?w=768&h=432&m=6&x=174&y=124&s=66&d=66",
    title: "Humiliation': How Australian media reacted to India's sensational victory",
  },
  {
    image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1pAPKh.img?w=768&h=432&m=6&x=18&y=115&s=536&d=258",
    title: "Eknath Shinde steps down amid suspense over next Maharashtra Chief Minister",
  },
];

const Page = () => {
  
  const locations = [
    {
      name: "Life in Wild",
      backgroundUrl: "https://i.pinimg.com/originals/e9/b2/72/e9b2721d83d72a642dc01fd04160b208.jpg"
    },
    {
      name: "Castle on a crag",
      backgroundUrl: "https://images3.alphacoders.com/131/thumb-1920-1318240.jpeg"
    },
    {
      name: "Nature's secret Code",
      backgroundUrl: "https://images.unsplash.com/photo-1649169112742-10a1319e84c1?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Tides and twilight",
      backgroundUrl: "https://c0.wallpaperflare.com/preview/113/664/858/blue-cloud-coast-colorful.jpg"
    },
    {
      name: "Sculpted vision of freedom",
      backgroundUrl: "https://images.unsplash.com/photo-1631983097767-099c77bf880d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3RhdHVlJTIwb2YlMjB1bml0eXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      name: "The giant's resting place",
      backgroundUrl: "https://images.unsplash.com/photo-1624318462623-7a29dbb84e0f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fDRrJTIwZm9yZXN0fGVufDB8fDB8fHww"
    },
  ];

  
  const [currentLocationIndex, setCurrentLocationIndex] = useState(0);


  const changeLocation = (direction) => {
    let newIndex;
    if (direction === 'right') {
    
      newIndex = currentLocationIndex === 0 
        ? locations.length - 1 
        : currentLocationIndex - 1;
    } else if (direction === 'left') {
      
      newIndex = (currentLocationIndex + 1) % locations.length;
    }
    
    setCurrentLocationIndex(newIndex);
  };

 
  const currentLocation = locations[currentLocationIndex];

  
  const FeedbackButton = () => {
    const handleFeedbackClick = () => {
      alert("Feedback form goes here!");
    };

    return (
      <div className="fixed bottom-0 right-3 z-50">
        <button
          onClick={handleFeedbackClick}
          className="flex items-center bg-white text-blue-500 font-thin text-sm py-1 px-4 w-full border-t border-gray-200 shadow-md hover:text-blue-700"
        >
          <FaMessage className="text-blue-500 w-3 h-3 mr-2" />
          Feedback
        </button>
      </div>
    );
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-no-repeat transition-opacity duration-700 ease-in-out"
      style={{ 
        backgroundImage: `url('${currentLocation.backgroundUrl}')` 
      }}
    >
      <Navbar />
      
      {/* Location Navigation Div */}
      <div className="absolute top-[53%] right-[7%] transform -translate-y-1/2 flex items-center gap-1">
        {/* Location Name Div */}
        <div className="flex px-4 py-2 bg-black/70 text-white rounded-md">
          {/* Location Icon (Using React Icon) */}
          <CiLocationOn className="display flex items-start w-5 h-5 mr-2" />
          {/* Location Name */}
          <span className="text-base">{currentLocation.name}</span>
        </div>

        {/* Right Arrow Button Div (Goes to Previous) */}
        <div 
          onClick={() => changeLocation('right')}
          className="flex items-center justify-center px-4 py-1.5 bg-black/70 text-white rounded-md cursor-pointer hover:bg-black/80 transition"
        >
          <span className="text-lg">&lt;</span>
        </div>

        {/* Left Arrow Button Div (Goes to Next) */}
        <div 
          onClick={() => changeLocation('left')}
          className="flex items-center justify-center px-4 py-1.5 bg-black/70 text-white rounded-md cursor-pointer hover:bg-black/80 transition"
        >
          <span className="text-lg">&gt;</span>
        </div>
      </div>

      <HorizontalCards data1={data1} />
      <Scroll data={data} />
      <FeedbackButton />
    </div>
  );
};

export default Page;