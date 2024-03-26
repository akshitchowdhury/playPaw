import React from "react";

import event1 from "../../assets/event1.png";
import event2 from "../../assets/event2.png";
import event3 from "../../assets/event3.png";

import './EventContent.css'

const EventContent = () => {
  return (
    <>
      <div className="eventContent">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start">
          <p className="md:mr-4 mb-4 md:mb-0">
            Birthday Parties: A Celebration to Remember Celebrate your child's
            birthday at Happy Place, where we turn parties into extraordinary
            experiences. Our indoor play area transforms into a festive
            playground with customized themes and engaging activities, ensuring
            a joyous celebration for your child and their friends.
          </p>
          <img src={event1} alt="placeholder" className="eventImg md:w-48" />
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start">
          <img src={event2} alt="placeholder" className="eventImg md:w-48" />
          <p className="md:mr-4 mb-4 md:mb-0">
            Festival Celebrations: Experience the Joy of Festivities Immerse
            yourself in the festive spirit with Happy Place’s special festival
            celebrations. Join us as we embrace popular festivals with specially
            designed activities and decorations, creating an atmosphere of fun
            and joy in our vibrant play space.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start">
          <p className="md:mr-4 mb-4 md:mb-0">
            School Trips: A Blend of Fun and Learning Happy Place is the perfect
            venue for school trips that combine education with entertainment. We
            offer a unique mix of learning and interactive games, making our
            play area an ideal choice for fun-filled school outings.
          </p>
          <img src={event3} alt="placeholder" className="eventImg md:w-48" />
        </div>
      </div>
    </>
  );
};

export default EventContent;
