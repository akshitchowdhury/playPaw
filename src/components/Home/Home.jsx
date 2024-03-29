import React from 'react'

import homeKid from '../../assets/home1.png'

import homeKid3 from '../../assets/abt2.png'
import homeKid4 from '../../assets/event1.png'
import about from "../../assets/abt1.png";

import './Home.css'
import Home2half from './Home2half'
import Home3half from './Home3half'
import PricingComponent from '../Pricing/PricingComponent'
import ImageCardContainer from '../Pricing/ImageCardContainer'
import PlayButton from './PlayButton'
import WhyUs from './WhyUs'
import HomeCarousel from './HomeCarousel'
import VideoCarousel from './VideoCarousel';
import v1 from '../../assets/video/1.mp4'
import v2 from '../../assets/video/2.mp4'
import v3 from '../../assets/video/3.mp4'

// import Home4half from './Home4half'



const Home = () => {



  const urls = [
  v1,
  v2,v3
];
  
  return (
    <>
    <div className="home overflow-hidden px-20 py-20 -mt-5 w-full fill-yellow-400 max-md:px-5 max-md:max-w-full">
    
    <HomeCarousel/>
    
    
    <div className="bubblegum-sans-regular self-center mt-8 text-4xl tracking-wider text-center text-fuchsia-900 max-w-[90%] mx-auto" style={{fontWeight: '700', fontSize: '3rem', lineHeight: '70px', textAlign: 'left'}}>
    Step into the World of Playful Pawws: Where Imagination Takes the Lead!
</div>
<br />
<div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start" style={{ padding: '4%' }}>
  <img src={about} alt="placeholder" className="eventImg md:w-full" style={{ height: '400px', borderRadius: '5%', marginRight: '4%', width:'100%' }} />
  <p className="paraText bubblegum-sans-regular text-lg mb-2 md:mb-4">
    At Play Pawws, we believe in creating a world of fun and excitement for kids! Our playzone area is designed to be a haven of joy, where children can unleash their imagination and energy in a safe and vibrant environment.
    <br/><br/>
    With colorful play structures, interactive games, and engaging activities, Play Pawws is the ultimate destination for kids to laugh, play, and make new friends. Our dedicated staff ensures that every visit is filled with unforgettable moments and endless smiles.
    <br/><br/>
    Whether it's a birthday party, a family outing, or just a day of fun, Play Pawws is the perfect place for kids to explore, learn, and grow. Join us today and let the adventure begin!
  </p>
</div>

  
<WhyUs/>

<Home2half/>
{/* <div className='video'>
    <Video urls={urls} />
  </div> */}
<br/>

  <div className="bubblegum-sans-regular self-center mt-8 text-4xl tracking-wider text-center text-fuchsia-900 max-w-[90%] mx-auto" style={{fontWeight: '700', fontSize: '3rem', lineHeight: '70px', textAlign: 'left'}}>
    Take a dive into the Energetic Moments we've stitched here at Paly Pawws!
</div>
<VideoCarousel urls={urls}/>
{/* <Home3half/> */}
{/* <Home4half/> */}
{/* 
<PricingComponent/> */}
<ImageCardContainer/>
</div>
</>





  )
}

export default Home
