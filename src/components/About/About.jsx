import React from "react";

import about from "../../assets/abt1.png";
import about2 from "../../assets/abt2.png";

import "./About.css";
import Home2half from "../Home/Home2half";
const About = () => {
  return (
    <>
      {/* <div className="about1 bg-yellow-400 text-white font-sans">
      <h1
            className="text-3xl font-bold mb-4 text-fuchsia-700"
            style={{ marginTop: "6%" }}
          >
            Welcome to Play Paw!
          </h1>
        <div className="container mx-auto p-8">
         
          <div
            className="content"
            style={{ padding: "3%", }}
          >
            <img
              src={about}
              alt="Play Paw Logo"
              className="rounded-lg border-4 border-fuchsia-700 mb-4"
              style={{ height: "400px", border: "3pt solid red" }}
            />
            <div
              className=" para w-full md:w-1/2 md:pl-8"
              style={{ height: "50%", fontWeight: "400" }}
            >
              <p className="text-lg mb-2 md:mb-4">
                At Play Paw, we believe in creating a world of fun and
                excitement for kids! Our playzone area is designed to be a haven
                of joy, where children can unleash their imagination and energy
                in a safe and vibrant environment.
              </p>
              <p className="text-lg mb-2 md:mb-4">
                With colorful play structures, interactive games, and engaging
                activities, Play Paw is the ultimate destination for kids to
                laugh, play, and make new friends. Our dedicated staff ensures
                that every visit is filled with unforgettable moments and
                endless smiles.
              </p>
              <p className="text-lg mb-2 md:mb-4">
                Whether it's a birthday party, a family outing, or just a day of
                fun, Play Paw is the perfect place for kids to explore, learn,
                and grow. Join us today and let the adventure begin!
              </p>
            </div>
          </div>
        </div>

        <div className="about2 flex flex-wrap bg" style={{ padding: "5%" }}>
          
          <div
            className="content w-full md:w-1/2 md:pl-8"
            style={{ height: "50%", fontWeight: "600" }}
          >
          <div className="para">
            <p className="text-lg mb-4">
              At Play Paw, we believe in creating a world of fun and excitement
              for kids! Our playzone area is designed to be a haven of joy,
              where children can unleash their imagination and energy in a safe
              and vibrant environment.
            </p>
            <p className="text-lg mb-4">
              With colorful play structures, interactive games, and engaging
              activities, Play Paw is the ultimate destination for kids to
              laugh, play, and make new friends. Our dedicated staff ensures
              that every visit is filled with unforgettable moments and endless
              smiles.
            </p>
            <p className="text-lg mb-4">
              Whether it's a birthday party, a family outing, or just a day of
              fun, Play Paw is the perfect place for kids to explore, learn, and
              grow. Join us today and let the adventure begin!
            </p>
            </div>

          <img
            src={about2}
            alt="Play Paw Logo"
            className="rounded-lg border-4 border-yellow-400 mb-4"
            style={{ height: "400px", marginLeft: "10%" }}
          />
          </div>
        </div>
      </div> */}

      <div className="aboutContent">
      <h1
            className="bubblegum-sans-regular text-3xl font-bold mb-4 text-fuchsia-700"
            style={{ marginTop: "6%" }}
          >
            Welcome to Play Paw!
          </h1>
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start" style={{ padding: '4%' }}>
  <img src={about} alt="placeholder" className="eventImg md:w-48" style={{ height: '400px', borderRadius: '5%', marginRight: '4%' }} />
  <p className="paraText bubblegum-sans-regular text-lg mb-2 md:mb-4">
    At Play Paw, we believe in creating a world of fun and excitement for kids! Our playzone area is designed to be a haven of joy, where children can unleash their imagination and energy in a safe and vibrant environment.
    <br/><br/>
    With colorful play structures, interactive games, and engaging activities, Play Paw is the ultimate destination for kids to laugh, play, and make new friends. Our dedicated staff ensures that every visit is filled with unforgettable moments and endless smiles.
    <br/><br/>
    Whether it's a birthday party, a family outing, or just a day of fun, Play Paw is the perfect place for kids to explore, learn, and grow. Join us today and let the adventure begin!
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
  <img src={about2} alt="placeholder" className="eventImg md:w-48" style={{ height: '400px' }} />
</div>

        </div>

      <div className="home2nd" style={{ padding: "4%", }}>
        <Home2half />
      </div>
    </>
  );
};

export default About;
