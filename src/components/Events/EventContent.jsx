import React from "react";

import event1 from "../../assets/homekid1.jpg";
import event2 from "../../assets/homekid2a.jpg";
import event3 from "../../assets/homekid2c.jpg";

import "./EventContent.css";

const EventContent = () => {
  return (
    <>
      <div className="eventContent">
        {/* <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start">
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
        </div> */}

        <div
          className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start"
          style={{ padding: "4%" }}
        >
          <img
            src={event1}
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
            At Play Paw, we believe in creating a world of fun and excitement
            for kids! Our playzone area is designed to be a haven of joy, where
            children can unleash their imagination and energy in a safe and
            vibrant environment.
            <br />
            <br />
            With colorful play structures, interactive games, and engaging
            activities, Play Paw is the ultimate destination for kids to laugh,
            play, and make new friends. Our dedicated staff ensures that every
            visit is filled with unforgettable moments and endless smiles.
            <br />
            <br />
            Whether it's a birthday party, a family outing, or just a day of
            fun, Play Paw is the perfect place for kids to explore, learn, and
            grow. Join us today and let the adventure begin!
          </p>
        </div>
        

        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start">
  <p className="paraText bubblegum-sans-regular md:ml-4 mb-4 md:mb-0" style={{ marginRight: '4%' }}>
    At Play Paw, we believe in creating a world of fun and excitement for kids! Our playzone area is designed to be a haven of joy, where children can unleash their imagination and energy in a safe and vibrant environment.
    <br/><br/>
    With colorful play structures, interactive games, and engaging activities, Play Paw is the ultimate destination for kids to laugh, play, and make new friends. Our dedicated staff ensures that every visit is filled with unforgettable moments and endless smiles.
    <br/><br/>
    Whether it's a birthday party, a family outing, or just a day of fun, Play Paw is the perfect place for kids to explore, learn, and grow. Join us today and let the adventure begin!
  </p>
  <img src={event2} alt="placeholder" className="eventImg md:w-full" style={{ height: '400px',borderRadius: '5%', marginLeft: '4%', width:'100%' }} />
</div>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start" style={{ padding: '4%' }}>
  <img src={event3} alt="placeholder" className="eventImg md:w-full" style={{ height: '400px', borderRadius: '5%', marginRight: '4%', width:'100%' }} />
  <p className="paraText bubblegum-sans-regular text-lg mb-2 md:mb-4">
    At Play Paw, we believe in creating a world of fun and excitement for kids! Our playzone area is designed to be a haven of joy, where children can unleash their imagination and energy in a safe and vibrant environment.
    <br/><br/>
    With colorful play structures, interactive games, and engaging activities, Play Paw is the ultimate destination for kids to laugh, play, and make new friends. Our dedicated staff ensures that every visit is filled with unforgettable moments and endless smiles.
    <br/><br/>
    Whether it's a birthday party, a family outing, or just a day of fun, Play Paw is the perfect place for kids to explore, learn, and grow. Join us today and let the adventure begin!
  </p>
</div>
      </div>
    </>
  );
};

export default EventContent;
