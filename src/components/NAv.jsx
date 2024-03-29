// import React from 'react'
// import { Link } from 'react-router-dom'
// import './Nav.css'
// import logo from '../assets/logo.jpg'

// const Nav = () => {
//   return (
//     <>
//       <div className="navbar flex z-10 items-start px-20 pt-3.5 pb-7 w-full text-lg max-md:flex-wrap max-md:px-5 max-md:max-w-full">
//         <img
//           loading="lazy"
//           src={logo}
//           className="shrink-0 max-w-full aspect-[1.41] w-[113px] "
//           style={{ borderRadius: '50%' }}
//         />
//         <div className="flex flex-grow gap-5 w-full text-fuchsia-700 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
          
//             {/* Nav links */}
//             <div className="flex gap-8">
//               <div className="grow">
//                 <Link className='navbar-link text-sm' to='/'>Home</Link>
//               </div>
//               <div className="flex gap-1.5">
//                 <div className="grow">
//                   <Link className='navbar-link text-sm' to='/about'>About Us</Link>
//                 </div>
//               </div>
//               <div className="flex gap-8 max-md:flex-wrap">
//                 <div className="grow">
//                   <Link className='navbar-link text-sm' to='/attractions'>Attractions</Link>
//                 </div>
//                 <div>
//                   <Link className='navbar-link text-sm' to='/events'>Events</Link>
//                 </div>
//                 <div>
//                   <Link className='navbar-link text-sm' to='/franchise'>Franchise</Link>
//                 </div>
//                 <div>
//                   <Link className='navbar-link text-sm' to='/pricing'>Pricing</Link>
//                 </div>
//                 <div>
//                   <Link className='navbar-link text-sm' to='/contact'>Contact Us</Link>
//                 </div>
//               </div>
            
//           </div>
//           <div className="flex flex-col justify-center" style={{marginLeft: '13%'}}>
//             <div className="NavButton justify-center px-4 py-1.5 mt-5 text-fuchsia-900 bg-yellow-400 rounded-full">
//               <Link to='/contact'>Get a Quote</Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Nav


import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, Button } from 'flowbite-react';
import logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom';
import './Nav.css'
import DropdownBasicExample from './Event List/DropdownButton';

export default function NAv() {
  return (
    <Navbar className='navbar' fluid rounded style={{height: '100px'}}>
      <NavbarBrand href="https://flowbite-react.com">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="bubblegum-sans-regular self-center whitespace-nowrap text-xl text-fuchsia-900 font-semibold dark:text-white" >Play Pawws</span>
      </NavbarBrand>
      <div className="flex md:order-2 ">
        <Button ><Link to='/contact' >Get a Quote</Link></Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse className='NavbarCollapse'>
        {/* <Link to="/" active>
          Home
        </Link>
        <Link to="/about">About</Link>
        <Link to="/attractions">Attractions</Link>
        <Link to="/events">Events</Link>
        <Link to="/franchise">Franchise</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/contact">Contact</Link> */}
      <Navbar.Link href="#" active >
      <Link className='navbar-link' to="/" active>
          Home
        </Link>
        </Navbar.Link>
        <Navbar.Link href="#" > <Link className='navbar-link '  to="/about">About</Link></Navbar.Link>
        {/* <Navbar.Link href="#"> <Link className='navbar-link' to="/attractions">Attractions</Link></Navbar.Link> */}
        <Navbar.Link href="#" ><Link className='navbar-link' to="/events">Events</Link></Navbar.Link>
        <Navbar.Link href="#" >
        <DropdownBasicExample /></Navbar.Link>
        <Navbar.Link href="#"><Link className='navbar-link ' to="/franchise">Franchise</Link></Navbar.Link>
        <Navbar.Link href="#"> <Link className='navbar-link' to="/pricing">Pricing</Link></Navbar.Link>
        <Navbar.Link href="#"> <Link className='navbar-link' to="/contact">Contact</Link> </Navbar.Link>
        
        
        
      
      </NavbarCollapse>
    </Navbar>
  );
}
