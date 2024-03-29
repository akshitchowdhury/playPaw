import React from "react";
import "./KittyParties.css";

import kitty from "../../assets/kitty1.png";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImageCarousel from "./ImageCarousel";
import images from "./Images";

const KittyParties = () => {
  return (
    <div className="kitty">
      <div
        className="bubblegum-sans-regular text-fuchsia-900 "
        style={{
          fontWeight: "700",
          fontSize: "3rem",
          lineHeight: "70px",
          textAlign: "center",
        }}
      >
        Kitty Parties <FontAwesomeIcon icon={faCat} />
      </div>

      <div
        className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start"
        style={{ padding: "4%" }}
      >
        <img
          src={kitty}
          alt="placeholder"
          className="eventImg md:w-full"
          style={{
            height: "400px",
            borderRadius: "5%",
            marginRight: "4%",
            width: "100%",
          }}
        />
        <p className="paraText bubblegum-sans-regular text-lg mb-2 md:mb-4">
          At Play Pawws, Kitty Parties are not just social gatherings; they're
          purr-fectly delightful experiences where friends come together to
          enjoy fun-filled moments in a vibrant and inviting atmosphere.
          <br /> Our
          dedicated team ensures that every Kitty Party is a memorable occasion,
          filled with laughter, relaxation, and cherished memories. Step into
          our cozy and charming space, where every detail is meticulously
          curated to create the perfect ambiance for your gathering. 
          
          <br />
           Our friendly staff is always on hand to provide
          exceptional service, ensuring that your Kitty Party is stress-free and
          enjoyable for everyone. 
          <br />
          Indulge in delectable snacks, refreshing
          beverages, and mouthwatering treats specially prepared for your Kitty
          Party. 
        </p>
      </div>
      <div className="bubblegum-sans-regular text-fuchsia-900 " style={{fontWeight: '700', fontSize: '3rem', lineHeight: '70px', textAlign: 'center'}}>
  Come Join the Pawty – Where Every Day is a Playful Adventure at Play Pawws!
</div> 

<ImageCarousel src = {images.kitty}/>
    </div>
  );
};

export default KittyParties;
