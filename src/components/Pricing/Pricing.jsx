import React from 'react';

import './Pricing.css'
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
    <div className="flex flex-col md:flex-row justify-center items-center">
      {/* Pricing Card 1 */}
      <div className="pricing1 w-80 rounded-lg overflow-hidden shadow-lg mb-8 md:mr-4">
        <div className="px-6 py-8">
          <div className="font-bold text-xl mb-2 text-indigo-600">Basic</div>
          <p className="text-gray-700 text-base">
            Perfect for a casual visit.
          </p>
          <p className="text-gray-700 text-base">
            Includes: 1 hour of playtime
          </p>
        </div>
        <div className="px-6 py-4 bg-gray-100"  style={{marginTop: '93%'}}>
        <button> 
          <p className="text-gray-700 text-base font-bold">$10</p>
        </button>
        </div>
      </div>
      {/* Pricing Card 2 */}
      <div className="pricing2 w-80 rounded-lg overflow-hidden shadow-lg mb-8 md:mx-2">
        <div className="px-6 py-8">
          <div className="font-bold text-xl mb-2 text-indigo-600">Standard</div>
          <p className="text-gray-700 text-base">
            Great value for regular visitors.
          </p>
          <p className="text-gray-700 text-base">
            Includes: 3 hours of playtime
          </p>
        </div>
        <div className="px-6 py-4 bg-gray-100" style={{marginTop: '93%'}}>
        <button>
          <p className="text-gray-700 text-base font-bold">$25</p>
          </button>
        </div>
      </div>
      {/* Pricing Card 3 */}
      <div className="pricing3 w-80 rounded-lg overflow-hidden shadow-lg mb-8 md:ml-4">
        <div className="px-6 py-8">
          <div className="font-bold text-xl mb-2 text-indigo-600">Premium</div>
          <p className="text-gray-700 text-base">
            Unlimited access for serious fun seekers.
          </p>
          <p className="text-gray-700 text-base">
            Includes: Unlimited playtime
          </p>
        </div>
        <div className="px-6 py-4 bg-gray-100" style={{marginTop: '93%'}}>
        <button>
          <p className="text-gray-700 text-base font-bold">$40</p>
          </button>
        </div>
      </div>
    </div>

    <PricingComponent/>
    

  </div>
);
}


export default Pricing;
