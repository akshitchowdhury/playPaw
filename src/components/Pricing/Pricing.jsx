import React from 'react';
import './PricingMain.css'
import PricingComponent from './PricingComponent';
import ImageCardContainer from './ImageCardContainer';

const Pricing = () => {
  return (
    <div className="prcingMain py-8 px-4 lg:px-16"  style={{padding: '5%'}}>
    <h2 className="londrina-sketch-regular tracking-widest border-fuchsia-900 text-blue-900">
      Ignite Smiles and Joy with 
    </h2>
    <br />
    <h2 className="londrina-sketch-regular tracking-widest border-fuchsia-900 text-fuchsia-900">
    
    Play Pawws!
    </h2>
    <p className="bubblegum-sans-regular text-lg lg:text-xl text-blue-600 text-center mb-12" style={{fontSize: '1.6rem'}}>
    Discover our incredibly fun pricing plans designed just for you to have a blast in our indoor play wonderlands. Dive into endless playtime with our affordable and customizable packages, making every moment full of laughter and excitement!
    </p>
   


    <PricingComponent/>
    
   
    <ImageCardContainer />

  </div>
);
}


export default Pricing;
