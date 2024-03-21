import React, { useState } from 'react'

import { Transition } from '@headlessui/react';
const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="w-full " style={{padding: '4%'}} >
      {items.map((item, index) => (
        <div key={index} className="mb-2 " style={{border: '3pt solid red', marginBottom: '4%'}}>
          <button
            className="w-full  flex justify-between items-center bg-yellow-400 p-4 rounded-md focus:outline-none"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
             <span className="text-lg font-semibold flex items-center " style={{ marginLeft: '40%'}}>{item.title}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 transition-transform transform ${
                openIndex === index ? 'rotate-180' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <Transition
            show={openIndex === index}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-0"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-150"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-0"
          >
            <div className=" overflow-hidden transition-all duration-200">
              <div className=" p-4 rounded-md" style={{backgroundColor: item.backgroundColor}}>
                <p>{item.content}</p>
                <div className=" flex flex-wrap bg" style={{padding: '5%'}}>
    <div className="w-full md:w-1/2 md:pl-8" style={{  height: '50%', fontWeight: '600', }}>
        <p className="text-lg mb-4">At Play Paw, we believe in creating a world of fun and excitement for kids! Our playzone area is designed to be a haven of joy, where children can unleash their imagination and energy in a safe and vibrant environment.</p>
        <p className="text-lg mb-4">With colorful play structures, interactive games, and engaging activities, Play Paw is the ultimate destination for kids to laugh, play, and make new friends. Our dedicated staff ensures that every visit is filled with unforgettable moments and endless smiles.</p>
        <p className="text-lg mb-4">Whether it's a birthday party, a family outing, or just a day of fun, Play Paw is the perfect place for kids to explore, learn, and grow. Join us today and let the adventure begin!</p>
    </div>

    
        <img src= {item.image} alt="Play Paw Logo" className="rounded-lg border-4 border-yellow-400 mb-4" style={{  height: '70%', marginLeft: '10%',}} />
    
    </div>
              </div>
            </div>
          </Transition>
        </div>
      ))}
    </div>
  );
};


export default Accordion
