import React from "react";
import Accordion from "../Attractions/Accordion";
import i1 from "../../assets/realPics/20.jpeg";
import i2 from "../../assets/realPics/2.jpeg";
import i3 from "../../assets/realPics/5.jpeg";
import i4 from "../../assets/realPics/11.jpeg";
import i5 from "../../assets/realPics/23.jpeg";
const WhyUs = () => {
  const items = [
    {
      title: "Custom-Themed Play Zones",

      image: i1,

      desc: "Engage your little one in our specially crafted indoor play areas at Play Paww. Every zone within our indoor play space is designed to ignite boundless imagination and joy.",
    },
    {
      title: "Safety First",

      image: i2,
      desc: "our soft play area is meticulously crafted with advanced padding, guaranteeing safe and responsible play for every child.",
    },
    {
      title: "Inclusive & Accessible",

      image: i3,
      desc: "At Play Paww, we warmly welcome every child, including those with special needs, positioning us as the ultimate choice for indoor play experiences for kids.",
    },
    {
      title: "Fun for All Ages",

      image: i4,

      desc: "our interactive games and themed play areas cater to a wide range of ages, from curious toddlers to adventurous tweens aged 2 to 8 years old, ensuring there's excitement for every child.",
    },
    {
      title: "Variety themed events",

      image: i5,
      desc: "At Play Paww, we host a diverse range of themed events to keep the excitement alive for our young adventurers. From princess parties to superhero extravaganzas, there's always something magical happening at our playground. Join us for a world of endless fun and imagination!",
    },
  ];

  return (
    <div>
      <div
        className="bubblegum-sans-regular self-center mt-8 text-4xl tracking-wider text-center text-fuchsia-900 max-w-[90%] mx-auto"
        style={{
          fontWeight: "700",
          fontSize: "3rem",
          lineHeight: "70px",
          textAlign: "left",
        }}
      >
        What Makes our Palyground Unbeatable
      </div>

      <Accordion items={items} />
    </div>
  );
};

export default WhyUs;
