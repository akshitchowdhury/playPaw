import React from 'react'

import homeKid from '../../assets/home1.png'
import homeKid2 from '../../assets/abt1.png'
import homeKid3 from '../../assets/abt2.png'
import homeKid4 from '../../assets/event1.png'

import './Home.css'
import Home2half from './Home2half'
import Home3half from './Home3half'
import PricingComponent from '../Pricing/PricingComponent'
import ImageCardContainer from '../Pricing/ImageCardContainer'
// import Home4half from './Home4half'


const Home = () => {
  return (
    <>
    <div className="home overflow-hidden px-20 py-20 -mt-5 w-full fill-yellow-400 max-md:px-5 max-md:max-w-full">
    
    <div className="bubblegum-sans-regular self-center mt-8 text-4xl tracking-wider text-center text-fuchsia-900 max-w-[90%] mx-auto" style={{fontWeight: '700', fontSize: '3rem',
    lineHeight: '70px'}}>
    Step into the World of Playful Pawws: Where Imagination Takes the Lead!
      </div>
    <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start">

  <p className="paraText bubblegum-sans-regular md:ml-4 mb-4 md:mb-0" style={{ marginRight: '4%' }}>
    At Play Paw, we believe in creating a world of fun and excitement for kids! Our playzone area is designed to be a haven of joy, where children can unleash their imagination and energy in a safe and vibrant environment.
    <br/><br/>
    With colorful play structures, interactive games, and engaging activities, Play Paw is the ultimate destination for kids to laugh, play, and make new friends. Our dedicated staff ensures that every visit is filled with unforgettable moments and endless smiles.
    <br/><br/>
    Whether it's a birthday party, a family outing, or just a day of fun, Play Paw is the perfect place for kids to explore, learn, and grow. Join us today and let the adventure begin!
  </p>
  <img src={homeKid} alt="placeholder" className="eventImg md:w-full" style={{ height: '400px',borderRadius: '10%', marginLeft: '4%', width:'100%' }} />
</div>

  
<Home2half/>
<Home3half/>
{/* <Home4half/> */}
{/* 
<PricingComponent/> */}
<ImageCardContainer/>
</div>
</>





  )
}

export default Home
