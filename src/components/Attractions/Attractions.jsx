import React from 'react';
import Accordion from './Accordion';

import attractionBg from '../../assets/attarctionBg.jpg'
import i1 from '../../assets/homekid2b.jpg'
const items = [
  {
    title: 'Custom-Themed Play Zones',
    
    



    image: i1 
  },
  {
    title: 'Safety First',
    
    image: i1
},
  {
    title: 'Inclusive & Accessible',
    
    image: i1
},
  {
    title: 'Fun for All Ages',
    
    image: i1
},
  {
    title: 'Variety themed events',
    
    
    image: i1
}
];

const Attractions = () => {
  return (
    <div className='bg-pink-300 min-h-screen flex items-center justify-center' style={{padding: '5%', backgroundImage: `url(${attractionBg})`, backgroundSize: 'cover', backgroundAttachment: 'fixed',
    
    }}>

    <div className="container mx-auto"  >
      <Accordion items={items} />
    </div>
  
  </div>
  
  );
};

export default Attractions;
