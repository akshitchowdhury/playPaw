import React from "react";
import EventContent from "./EventContent";

import EventMemories from "./EventMemories";
import Home2half from "../Home/Home2half"
import './Events.css'
import ImageCardContainer from "../Pricing/ImageCardContainer";
const Events = () => {
  return (
    <div className="events" style={{ padding: "5%" }}>
      <h1 className="londrina-sketch-regular tracking-widest border-fuchsia-900 text-fuchsia-900">
        Come Pounce and Play – Pawws Promises a Purr-fect Party!
      </h1>
      {/* <p className="dosis-custom" style={{marginBottom: '10%'}}>
        Gear up for a purr-fectly unforgettable experience with our whimsical
        events at Pawws, the ultimate destination for themed celebrations and
        unforgettable moments
      </p> */}


      <Home2half/>

        <ImageCardContainer/>
      {/* <EventContent />
      <EventMemories /> */}
    </div>
  );
};

export default Events;
