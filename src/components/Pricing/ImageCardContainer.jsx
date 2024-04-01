import React from 'react';
import c1 from '../../assets/realPics/44.jpeg';
import c2 from '../../assets/realPics/7.jpeg';
import c3 from '../../assets/realPics/3.jpeg';
import c4 from '../../assets/realPics/4.jpeg';
import c5 from '../../assets/realPics/47.jpeg';
import c6 from '../../assets/realPics/45.jpeg';
import c7 from '../../assets/realPics/8.jpeg';
import c8 from '../../assets/realPics/19.jpeg';
import c9 from '../../assets/realPics/50.jpeg';
import c10 from '../../assets/realPics/17.jpeg';
import c11 from '../../assets/realPics/14.jpeg';
import c12 from '../../assets/realPics/15.jpeg';
import './ImageCardContainer.css'
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

const ImageCardContainer = () => {
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
    {
      imageUrl: c7,
      
    },
    {
      imageUrl: c8,
      
    },
    {
      imageUrl: c9,
      
    },
    {
      imageUrl: c10,
      
    },
    {
      imageUrl: c11,
      
    },
    {
      imageUrl: c12,
      
    },

  ];

  return (
    <>   
    <div className="block">
    <div className="content">
    <div className="flex flex-col items-center justify-center h-screen" style={{marginLeft: '5%'}}>
    <h1 className="bubblegum-sans-regular tracking-widest border-fuchsia-900 text-fuchsia-900">Create unforgettable memories and cherished moments at Play Pawws!</h1>
    <h4 className="text-lg md:text-xl lg:text-2xl text-center"> Bring your kids and let the adventure begin</h4>
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

export default ImageCardContainer;
