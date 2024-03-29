import React from 'react'
import './EventParties.css'
import eventParty from '../../assets/event1.png'
import { faCat, faTree } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import images from './Images';
import ImageCarousel from './ImageCarousel';


const EventParties = () => {
  return (
    <div className='eventParties'>

<div className="bubblegum-sans-regular text-fuchsia-900 " style={{fontWeight: '700', fontSize: '3rem', lineHeight: '70px', textAlign: 'center'}}>
    Event Parties <FontAwesomeIcon
              icon={faTree}
              
            />
</div>     

      <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start" style={{ padding: '4%' }}>
  <img src={eventParty} alt="placeholder" className="eventImg md:w-full" style={{ height: '400px', borderRadius: '5%', marginRight: '4%', width:'100%' }} />
  <p className="paraText bubblegum-sans-regular text-lg mb-2 md:mb-4">
  At Play Pawws, event parties are not just gatherings; they're extraordinary experiences filled with fun, laughter, and endless possibilities for kids and their families. Our dedicated team strives to make every event memorable, ensuring that guests of all ages have a fantastic time from start to finish.
  <br/>

Whether it's a school outing, a daycare trip, or a community gathering, Play Pawws caters to groups of all sizes and ages. Our versatile event spaces can accommodate various themes and preferences, ensuring that every party is unique and unforgettable.
<br/>
Our experienced staff is committed to providing exceptional service, ensuring that every aspect of your event is taken care of seamlessly. From personalized decorations and themed activities to delicious catering options, we go above and beyond to exceed your expectations.

<br/>
Join us for an event party like no other and embark on a journey filled with laughter, adventure, and unforgettable moments at Play Pawws. Let us be your partner in creating magical experiences that will leave a lasting impression on everyone in attendance.</p>
</div>
<div className="bubblegum-sans-regular text-fuchsia-900 " style={{fontWeight: '700', fontSize: '3rem', lineHeight: '70px', textAlign: 'center'}}>
  Come Join the Pawty – Where Every Day is a Playful Adventure at Play Pawws!
</div> 
<ImageCarousel src = {images.eventParty}/>
    </div>
  )
}

export default EventParties
