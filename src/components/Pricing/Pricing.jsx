import React from 'react';
import './PricingMain.css'
import PricingComponent from './PricingComponent';
import ImageCardContainer from './ImageCardContainer';

const Pricing = () => {
  return (
    <div className="prcingMain py-8 px-4 lg:px-16"  style={{padding: '5%'}}>
    <h2 className="londrina-sketch-regular tracking-widest border-fuchsia-900 text-blue-900">
      Unleash Tail-Wagging Fun with 
    </h2>
    <br />
    <h2 className="londrina-sketch-regular tracking-widest border-fuchsia-900 text-fuchsia-900">
    
    Play Paws
    </h2>
    <p className="text-lg lg:text-xl text-gray-800 text-center mb-12">
      Explore our paws-itively amazing pricing plans tailored for boundless joy in our indoor play paradises. Enjoy more playtime for less with our flexible and budget-friendly packages.
    </p>
   


    <PricingComponent/>
    
   
    <ImageCardContainer />

  </div>
);
}


export default Pricing;
