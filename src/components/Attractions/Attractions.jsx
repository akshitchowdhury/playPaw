import React from 'react';
import Accordion from './Accordion';

import attractionBg from '../../assets/attarctionBg.jpg'
import i1 from '../../assets/homekid2b.jpg'
const items = [
  {
    title: 'Soft Play Arena',
    
    



    image: i1 
  },
  {
    title: 'Birthday Parties',
    
    image: i1
},
  {
    title: 'Kitty Parties',
    
    image: i1
},
  {
    title: 'Work Station',
    
    image: i1
},
  {
    title: 'Cafe',
    
    
    image: i1
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
