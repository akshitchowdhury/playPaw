import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import logo from '../assets/logo.jpg'

const Nav = () => {
  return (
    <>
      <div className="navbar flex z-10 items-start px-20 pt-3.5 pb-7 w-full text-lg max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          src={logo}
          className="shrink-0 max-w-full aspect-[1.41] w-[113px] "
          style={{ borderRadius: '50%' }}
        />
        <div className="flex flex-grow gap-5 w-full text-fuchsia-700 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
          <div className="bg-gray-200 rounded-lg p-4 mt-4 flex-grow" style={{marginRight: '-5%', marginLeft: '20%',  
          height: '100px', width: '70%'}}>
            {/* Nav links */}
            <div className="flex gap-8">
              <div className="grow">
                <Link className='navbar-link text-sm' to='/'>Home</Link>
              </div>
              <div className="flex gap-1.5">
                <div className="grow">
                  <Link className='navbar-link text-sm' to='/about'>About Us</Link>
                </div>
              </div>
              <div className="flex gap-8 max-md:flex-wrap">
                <div className="grow">
                  <Link className='navbar-link text-sm' to='/attractions'>Attractions</Link>
                </div>
                <div>
                  <Link className='navbar-link text-sm' to='/events'>Events</Link>
                </div>
                <div>
                  <Link className='navbar-link text-sm' to='/franchise'>Franchise</Link>
                </div>
                <div>
                  <Link className='navbar-link text-sm' to='/pricing'>Pricing</Link>
                </div>
                <div>
                  <Link className='navbar-link text-sm' to='/contact'>Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center" style={{marginLeft: '13%'}}>
            <div className="NavButton justify-center px-4 py-1.5 mt-5 text-fuchsia-900 bg-yellow-400 rounded-full">
              <Link to='/contact'>Get a Quote</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav
