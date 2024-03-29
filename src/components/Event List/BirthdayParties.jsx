import React from 'react'
import bday from '../../assets/bday1.png'
import './BirthdayParties.css'
import { faCake } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import images from './Images';
import ImageCarousel from './ImageCarousel';


const BirthdayParties = () => {
  return (
    <div className='birthdayParties'>
<div className="bubblegum-sans-regular text-fuchsia-900 " style={{fontWeight: '700', fontSize: '3rem', lineHeight: '70px', textAlign: 'center'}}>
    Birthday Celebrations! <FontAwesomeIcon
              icon={faCake}
              
            />
</div> 

<div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start" style={{ padding: '4%' }}>
  

  
  <img src={bday} alt="placeholder" className="eventImg md:w-full" style={{ height: '400px', borderRadius: '5%', marginRight: '4%', width:'100%' }} />
  <p className="paraText bubblegum-sans-regular text-lg mb-2 md:mb-4">
  At Play Pawws, birthday celebrations are not just events; they're unforgettable adventures filled with laughter, joy, and boundless excitement for kids and their loved ones. Our dedicated team understands the importance of making every birthday special, which is why we go above and beyond to create magical experiences for children and their friends and families.


<br />
Our birthday celebration packages are tailored to suit every child's unique preferences and interests. Whether they dream of exploring obstacle courses, bouncing on trampolines, or diving into ball pits, we have something for everyone. Our friendly staff is always on hand to ensure that every aspect of the party runs smoothly, allowing parents to relax and enjoy the festivities alongside their little ones.
<br />

So why wait? Let the adventure begin and celebrate your child's birthday in style at Play Pawws. Join us for a day of laughter, play, and unforgettable moments that will leave everyone smiling from ear to ear.
  </p>
</div>
  
  <div className="bubblegum-sans-regular text-fuchsia-900 " style={{fontWeight: '700', fontSize: '3rem', lineHeight: '70px', textAlign: 'center'}}>
  Come Join the Pawty – Where Every Day is a Playful Adventure at Play Pawws!
</div> 

<ImageCarousel src = {images.bday}/>
    </div>
  )
}

export default BirthdayParties
