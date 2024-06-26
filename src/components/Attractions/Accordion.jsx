

import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { faChild, faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="w-full" style={{ padding: "4%" }}>
      {items.map((item, index) => (
        <div key={index} className="mb-2">
        <button
  className="w-full flex justify-between items-center bg-pink-300 p-4 rounded-md focus:outline-none transition-colors duration-700 hover:bg-white"
  onClick={() => setOpenIndex(openIndex === index ? null : index)}
>
            <span className="text-lg font-semibold text-fuchsia-700">{item.title}</span>
            
            <FontAwesomeIcon icon= {faPaw}  className={`h-6 w-6 transition-transform transform ${
                openIndex === index ? "rotate-180" : ""
              }`} />


           
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
            <div className="overflow-hidden transition-all duration-200">
              <div className="p-4 rounded-md ">
                <div
                  className="flex flex-col md:flex-row items-center md:items-start"
                  style={{
                    border: "3pt solid pink",
                    borderRadius: "10px",
                    backgroundColor: 'inherit',
                    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
                    padding: '5%'
                  }}
                >
                  <p className="text-lg mb-4 md:w-2/3 md:pr-8 text-pink-600" style={{fontFamily: 'cursive', fontSize:'1.5rem'}}>{item.desc}</p>
                  <img
                    src={item.image}
                    alt="Play Paw Logo"
                    className="rounded-lg md:w-1/3"
                  />
                </div>
              </div>
            </div>
          </Transition>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
