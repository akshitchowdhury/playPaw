import React, { useState } from "react";
import franchise from "../../assets/17.jpeg";
import franchise2 from "../../assets/16.jpeg";
import "./Franchise.css";
import { Transition } from "@headlessui/react";

const Franchise = () => {
  const [showParagraph1, setShowParagraph1] = useState(false);
  const [showParagraph2, setShowParagraph2] = useState(false);

  const toggleParagraph1 = () => {
    setShowParagraph1(!showParagraph1);
  };

  const toggleParagraph2 = () => {
    setShowParagraph2(!showParagraph2);
  };

  return (
    <div className="franchise">
      <div className="schoolbell-regular text-pink-800" style={{ marginBottom: '7%' }}>
        Welcome to the Pawws Paradise Family – A Franchise Opportunity Tailored
        for Pet Pals and Tiny Tots!
      </div>

      <div
        className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start"
        style={{ padding: "4%" }}
      >
        
          <p
            className="franchiseText text-fuchsia-700 md:ml-4 mb-4 md:mb-0"
            style={{
              marginRight: "4%",
              borderRadius: "10px",
              backgroundColor: 'inherit',
              boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
              padding: '5%',
              cursor: "pointer"
            }}
            onClick={toggleParagraph1}
          >
            Step into the vibrant world of Play Pawws, where every moment is a
            burst of excitement and imagination! Since our grand opening in 2023,
            Play Pawws has been the ultimate destination for little adventurers
            seeking joy and boundless creativity. Immerse yourself in our Luxury
            Premium Indoor SoftPlay Club, meticulously crafted to whisk children
            away on a journey of wonder and fun.
          </p>
        
        <Transition
          show={showParagraph1}
          enter="transition ease-out duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition ease-in duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        > <img
          src={franchise}
          alt="placeholder"
          className="eventImg md:w-full"
          style={{
            height: "500px",
            borderRadius: "5%",
            marginLeft: "4%",
            width: "350rem",
            
          }}
          
        />
        </Transition>
      </div>

      <br />

      <div
        className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start"
        style={{ padding: "4%" }}
      >
      
      <Transition
          show={showParagraph2}
          enter="transition ease-out duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition ease-in duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
        <img
          src={franchise2}
          alt="placeholder"
          className="eventImg md:w-full"
          style={{
            height: "500px",
            borderRadius: "5%",
            marginRight: "4%",
            width: "150rem",
            
          }}
          
        />  </Transition>
          <p
            className="franchiseText text-fuchsia-700 bubblegum-sans-regular md:ml-4 mb-4 md:mb-0"
            style={{
              backgroundColor: 'inherit',
              boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
              borderRadius: "10px",
              padding: '5%',
              cursor: "pointer"
            }}
            onClick={toggleParagraph2}
          >
            At Play Pawws, we're passionate about curating an experience that's as
            dynamic as it is delightful. Say goodbye to screens and hello to a
            kaleidoscope of interactive play structures, rainbow-hued slides,
            bubbling ball pits, and thrilling climbing frames. It's a world where
            every corner sparks curiosity and every step unleashes endless
            possibilities!
          </p>
       
      </div>
    </div>
  );
};

export default Franchise;
