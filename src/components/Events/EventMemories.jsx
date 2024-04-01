import React from 'react';
import c1 from '../../assets/realPics/1.jpeg';
import c2 from '../../assets/realPics/2.jpeg';
import c3 from '../../assets/realPics/3.jpeg';
import c4 from '../../assets/realPics/4.jpeg';
import c5 from '../../assets/realPics/5.jpeg';
import c6 from '../../assets/realPics/2.jpeg';
import './EventMemories.css'
import { Link } from 'react-router-dom';

const ImageCard = ({linkUrl, imageUrl, text }) => {
  return (
    <Link to={linkUrl}>
    
    <div className="Icard relative overflow-hidden rounded-lg shadow-lg">
    
      <img
        src={imageUrl}
        alt="Card"
        className="w-full h-48 object-cover transition-opacity duration-300 ease-in-out"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 bg-black bg-opacity-50">
        <p className="text-white">{text}</p>
      </div>
      
    </div>
    </Link>
  );
};

const EventMemories = () => {
  const cards = [
    {
      imageUrl: c1,
      
      
    },
    {
      imageUrl: c2,
      
    },
    {
      imageUrl: c3,
     
    },
    {
      imageUrl: c4,
      
    },
    {
      imageUrl: c5,
      
    },
    {
      imageUrl: c6,
      
    },
  ];

  return (
    <>   
    <div className="block">
    <div className="content">
    <div className="flex flex-col items-center justify-center h-screen" style={{marginLeft: '5%'}}>
    <h1 className="londrina-sketch-regular text-3xl md:text-4xl lg:text-5xl text-center font-bold">Take a closer look</h1>
    <h4 className="text-lg md:text-xl lg:text-2xl text-center">Join us for these exciting events. Hurry, spaces fill up fast!</h4>
</div>
</div>
     <div className="Icontainer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
    
      {cards.map((card, index) => (
             <ImageCard key={index} imageUrl={card.imageUrl}  />
      ))}
    </div>

    </div>
    </>

  );
};

export default EventMemories;
