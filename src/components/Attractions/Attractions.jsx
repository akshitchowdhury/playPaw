import React from 'react';
import Accordion from './Accordion';

import attractionBg from '../../assets/attarctionBg.jpg'
const items = [
  {
    title: 'Soft Play Arena',
    
    content: 'Content of Section 1',
  },
  {
    title: 'Birthday Parties',
    content: 'Content of Section 2',
  },
  {
    title: 'Kitty Parties',
    content: 'Content of Section 3',
  },
  {
    title: 'Work Station',
    content: 'Content of Section 4',
  },
  {
    title: 'Cafe',
    content: 'Content of Section 5',
  }
];

const Attractions = () => {
  return (
    <div className='bg-pink-300 min-h-screen flex items-center justify-center' style={{padding: '5%', backgroundImage: `url(${attractionBg})`, backgroundSize: 'cover', backgroundAttachment: 'fixed',
    border: '3pt solid red'
    }}>

    <div className="container mx-auto" >
      <Accordion items={items} />
    </div>
  
  </div>
  
  );
};

export default Attractions;
