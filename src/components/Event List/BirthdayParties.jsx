import React from 'react'
import bday from '../../assets/bday1.png'
import './BirthdayParties.css'
const BirthdayParties = () => {
  return (
    <div className='birthdayParties'>

<div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start" style={{ padding: '4%' }}>
  <img src={bday} alt="placeholder" className="eventImg md:w-full" style={{ height: '400px', borderRadius: '5%', marginRight: '4%', width:'100%' }} />
  <p className="paraText bubblegum-sans-regular text-lg mb-2 md:mb-4">
    At Play Pawws, we believe in creating a world of fun and excitement for kids! Our playzone area is designed to be a haven of joy, where children can unleash their imagination and energy in a safe and vibrant environment.
    <br/><br/>
    With colorful play structures, interactive games, and engaging activities, Play Pawws is the ultimate destination for kids to laugh, play, and make new friends. Our dedicated staff ensures that every visit is filled with unforgettable moments and endless smiles.
    <br/><br/>
    Whether it's a birthday party, a family outing, or just a day of fun, Play Pawws is the perfect place for kids to explore, learn, and grow. Join us today and let the adventure begin!
  </p>
</div>
      
    </div>
  )
}

export default BirthdayParties
