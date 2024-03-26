import React from 'react';

import PricingComponent from './PricingComponent';
const Pricing = () => {
  return (
    <div className="py-8 px-4 lg:px-16">
    <h2 className="text-3xl lg:text-4xl font-bold text-center text-indigo-600 mb-8">
      Unleash Tail-Wagging Fun with Play Paws!
    </h2>
    <p className="text-lg lg:text-xl text-gray-800 text-center mb-12">
      Explore our paws-itively amazing pricing plans tailored for boundless joy in our indoor play paradises. Enjoy more playtime for less with our flexible and budget-friendly packages.
    </p>
   

    <PricingComponent/>
    

  </div>
);
}


export default Pricing;
