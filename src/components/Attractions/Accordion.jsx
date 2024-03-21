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
              <div className="bg-white p-4 rounded-md">
                <p>{item.content}</p>
              </div>
            </div>
          </Transition>
        </div>
      ))}
    </div>
  );
};


export default Accordion
