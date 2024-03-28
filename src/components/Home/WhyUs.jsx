import React from 'react'
import Accordion from '../Attractions/Accordion'
import i1 from '../../assets/homekid2b.jpg'
const WhyUs = () => {
    const items = [
        {
          title: 'Custom-Themed Play Zones',
          
          
      
      
      
          image: i1 
        },
        {
          title: 'Safety First',
          
          image: i1
      },
        {
          title: 'Inclusive & Accessible',
          
          image: i1
      },
        {
          title: 'Fun for All Ages',
          
          image: i1
      },
        {
          title: 'Variety themed events',
          
          
          image: i1
      }
      ];


  return (
    <div>
      
      <div className="bubblegum-sans-regular self-center mt-8 text-4xl tracking-wider text-center text-fuchsia-900 max-w-[90%] mx-auto" style={{fontWeight: '700', fontSize: '3rem', lineHeight: '70px', textAlign: 'left'}}>
    What Makes our Palyground Unbeatable
</div>


<Accordion items={items}/>
    </div>
  )
}

export default WhyUs
