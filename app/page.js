"use client"
import React from 'react';
import Navbar from './components/Navbar'


import Scroll from './components/Scroll';

const data = [
  {
    image: 'https://example.com/image1.jpg',
    title: 'Title 1',
    description: 'Description 1',
  },
  {
    image: 'https://example.com/image2.jpg',
    title: 'Title 2',
    description: 'Description 2',
  },
  {
    image: 'https://example.com/image2.jpg',
    title: 'Title 2',
    description: 'Description 2',
  },
  {
    image: 'https://example.com/image2.jpg',
    title: 'Title 2',
    description: 'Description 2',
  },
  {
    image: 'https://example.com/image2.jpg',
    title: 'Title 2',
    description: 'Description 2',
  },
  {
    image: 'https://example.com/image2.jpg',
    title: 'Title 2',
    description: 'Description 2',
  },
  {
    image: 'https://example.com/image2.jpg',
    title: 'Title 2',
    description: 'Description 2',
  },
  {
    image: 'https://example.com/image2.jpg',
    title: 'Title 2',
    description: 'Description 2',
  },
  {
    image: 'https://example.com/image2.jpg',
    title: 'Title 2',
    description: 'Description 2',
  },
  // Add more data objects as needed
];

const Page = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-no-repeat"
      style={{ backgroundImage: `url('https://i.pinimg.com/originals/e9/b2/72/e9b2721d83d72a642dc01fd04160b208.jpg')` }}
    >
      <Navbar />
      <Scroll data={data} />

    </div>
  );
};

export default Page;


{/* <Search/> */ }
{/* kal scrool section banana h aur shadow ka problem theek karna h */ }
{/* background image ko change karna h h page.js ka backgraound image set karna h */ }
