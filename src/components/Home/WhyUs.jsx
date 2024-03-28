import React from 'react'
import Accordion from '../Attractions/Accordion'
import i1 from '../../assets/homekid2b.jpg'
const WhyUs = () => {
    const items = [
  {
    title: 'Soft Play Arena',
    
    



    image: i1 
  },
  {
    title: 'Birthday Parties',
    
    image: i1
},
  {
    title: 'Kitty Parties',
    
    image: i1
},
  {
    title: 'Work Station',
    
    image: i1
},
  {
    title: 'Cafe',
    
    
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
