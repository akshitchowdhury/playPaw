import React, { useState } from "react";
import franchise from "../../assets/17.jpeg";
import franchise2 from "../../assets/16.jpeg";
import "./Franchise.css";

const Franchise = () => {
  const [showParagraph1, setShowParagraph1] = useState(false);
  const [showParagraph2, setShowParagraph2] = useState(false);

  const toggleParagraph1 = () => {
    setShowParagraph1(!showParagraph1);
  };
  const hoverParagraph1 = () => {
    setShowParagraph1(!showParagraph1);
  };

  const toggleParagraph2 = () => {
    setShowParagraph2(!showParagraph2);
  };

  return (
    <div className="franchise">
      <div className="schoolbell-regular text-pink-800" style={{marginBottom: '7%'}}>
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
            display: showParagraph1 ? 'block' : 'none', // Show or hide paragraph based on state
            opacity: showParagraph1 ? 1 : 0, // Opacity based on state
            height: showParagraph1 ? 'auto' : 0, // Height based on state
            transition: 'opacity 0.5s ease, height 0.5s ease', // Transition effect
          }}
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
            height: "500px",
            borderRadius: "5%",
            marginLeft: "4%",
            width: "500px",
            cursor: "pointer",
          }}
          onClick={toggleParagraph1} // Toggle visibility of paragraph on image click
          

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
            height: "500px",
            borderRadius: "5%",
            marginRight: "4%",
            width: "500px",
            cursor: "pointer",
          }}
          onClick={toggleParagraph2} // Toggle visibility of paragraph on image click
        />
        <p
          className="franchiseText text-fuchsia-700 bubblegum-sans-regular md:ml-4 mb-4 md:mb-0"
          style={{
            backgroundColor: 'inherit',
            boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            padding: '5%',
            display: showParagraph2 ? 'block' : 'none', // Show or hide paragraph based on state
            opacity: showParagraph2 ? 1 : 0, // Opacity based on state
            height: showParagraph2 ? 'auto' : 0, // Height based on state
            transition: 'opacity 0.5s ease, height 0.5s ease', // Transition effect
          }}
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
