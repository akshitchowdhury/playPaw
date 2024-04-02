import React, { useState } from 'react';
import { Transition } from "@headlessui/react";

import './FlashDiscount.css'
import { Link } from 'react-router-dom';
const FlashDiscount = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="discountButton sticky top-0 w-12 h-12 p-4 bg-inherit shadow-md rounded-full">
      <button
        className={`w-12 h-12 bg-${isOpen ? 'blue' : 'green'}-500 text-white rounded-full transition duration-300 flex items-center justify-center`}
        onClick={toggleAccordion}
      >
        {isOpen ? '-' : '+'}
      </button>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 scale-0"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-150 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-0"
      >
        {(ref) => (
          <div
            ref={ref}
            className="absolute top-0 left-24 bg-orange-300 p-2 rounded-lg"
           style={{width: '300px', height: '200px'}}>
            <h3 className="bubblegum-sans-regular text-fuchsia-700 mb-4 text-2xl font-semibold">Early Bird Offer!</h3>
            <p className="text-md text-gray-600 mt-2">Promotional offer: <span className="text-green-600 font-semibold">250/-</span> till end of April</p>
            <Link to='/contact'>
            <div className="w-1/2 bg-pink-400 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 text-white font-medium rounded-full text-sm px-5 py-2.5 text-center"
            style={{marginTop: '20%', marginLeft: '20%'}}>
              Book now
            </div></Link>
          </div>
        )}
      </Transition>
    </div>
  );
};

export default FlashDiscount;
