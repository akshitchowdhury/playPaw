import React from "react";
import EventContent from "./EventContent";

import './Events.css'
import EventMemories from "./EventMemories";

const Events = () => {
  return (
    <div className="events" style={{padding: '5%'}}>
      <h1 className="londrina-sketch-regular tracking-widest border-fuchsia-900 text-fuchsia-900">
        Join the Party – It’s Always Fun at Happy Place! 
      </h1>
      <p className="dosis-custom">
      Get ready for an
        unforgettable experience with our creative events at Happy Place, the
        ultimate destination for themed celebrations and memorable occasions.
      </p>
      <EventContent />
      <EventMemories/>
    </div>
  );
};

export default Events;
