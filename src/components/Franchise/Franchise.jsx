import React from "react";

import franchise from "../../assets/17.jpeg";
import franchise2 from "../../assets/16.jpeg";
import "./Franchise.css";

const Franchise = () => {
  return (
    <div className="franchise">
      <div className="schoolbell-regular text-pink-800" style={{marginBottom: '7%'}}>
        Welcome to the Pawws Paradise Family – A Franchise Opportunity Tailored
        for Pet Pals and Tiny Tots!
      </div>

      

      <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start"
      >
        <p
          className="franchiseText text-fuchsia-700 bubblegum-sans-regular md:ml-4 mb-4 md:mb-0"
          style={{ marginRight: "4%", }}
        >
          Step into the vibrant world of Play Pawws, where every moment is a
          burst of excitement and imagination! Since our grand opening in 2023,
          Play Pawws has been the ultimate destination for little adventurers
          seeking joy and boundless creativity. Immerse yourself in our Luxury
          Premium Indoor SoftPlay Club, meticulously crafted to whisk children
          away on a journey of wonder and fun.
        </p>
        <img
          src={franchise}
          alt="placeholder"
          className="eventImg md:w-full"
          style={{
            height: "400px",
            borderRadius: "5%",
            marginLeft: "4%", 
            width: "100%",
          }}
        />
      </div>

          <br />
      <div
        className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start"
        style={{ padding: "4%" }}
      >
        <img
          src={franchise2}
          alt="placeholder"
          className="eventImg md:w-full"
          style={{
            height: "400px",
            borderRadius: "5%",
            marginRight: "4%",
            width: "100%",
          }}
        />
        <p className="franchiseText text-fuchsia-700 bubblegum-sans-regular md:ml-4 mb-4 md:mb-0">
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
