import React from "react";

import about from "../../assets/abt1.png";
import about2 from "../../assets/abt2.png";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChild, faEnvelope, faPaw, faPhone, } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "./About.css";
import Home2half from "../Home/Home2half";
const About = () => {
  return (
    <>

      <div className="aboutContent">
      <h1
            className="bubblegum-sans-regular text-3xl font-bold mb-4 text-fuchsia-700"
            style={{ marginTop: "6%" }}
          >
            <FontAwesomeIcon icon={faPaw}/> Welcome to Play Pawws <FontAwesomeIcon icon={faPaw}/>
          </h1>
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start" style={{ padding: '4%' }}>
  <img src={about} alt="placeholder" className="eventImg md:w-full" style={{ height: '400px', borderRadius: '5%', marginRight: '4%', width:'100%' }} />
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

export default About;
