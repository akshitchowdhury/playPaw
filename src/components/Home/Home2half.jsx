import React from 'react'

import home2a from '../../assets/homekid2a.jpg'
import home2b from '../../assets/homekid2b.jpg'
import home2c from '../../assets/homekid2c.jpg'
import home2d from '../../assets/homekid2d.jpg'

const Home2half = () => {
  return (
<>
<div className="self-center mt-24 text-4xl tracking-wider text-center text-fuchsia-900 w-[521px] max-md:mt-10 max-md:max-w-full mx-auto">
    Providing Good Qualities For Your Loving Kids
</div>


    <div className="self-center px-5 mt-11 w-full max-w-[1272px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow items-center px-11 pt-5 pb-8 mt-2 w-full text-center text-fuchsia-900 bg-pink-100 rounded-xl border-2 border-solid border-zinc-400 max-md:px-5 max-md:mt-8">
            <img
              loading="lazy"
              src={home2a} style={{borderRadius: '30%'}}
              className="aspect-square w-[65px]"
            />
            <div className="mt-5 text-2xl font-semibold tracking-wider">
              Bus Service
            </div>
            <div className="self-stretch mt-5 text-base tracking-wide">
              ubiquitous models rather than parallel initiatives. Seamlessly
              reinvent success.
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow px-11 pt-5 pb-8 mt-2 w-full text-center text-white rounded-xl border-2 border-solid bg-fuchsia-950 border-fuchsia-950 max-md:px-5 max-md:mt-8">
            <img
              loading="lazy"
              src={home2b} style={{borderRadius: '30%'}}
              className="self-center aspect-square w-[65px]"
            />
            <div className="mt-5 text-2xl font-semibold tracking-wider">
              Sports Training
            </div>
            <div className="mt-3.5 text-base tracking-wide">
              ubiquitous models rather than parallel initiatives. Seamlessly
              reinvent success.
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow px-11 pt-5 pb-8 mt-2 w-full text-center text-fuchsia-900 bg-pink-100 rounded-xl border-2 border-solid border-zinc-400 max-md:px-5 max-md:mt-8">
            <img
              loading="lazy"
              src={home2c} style={{borderRadius: '30%'}}
              className="self-center aspect-square w-[65px]"
            />
            <div className="mt-5 text-2xl font-semibold tracking-wider">
              Music Training
            </div>
            <div className="mt-3.5 text-base tracking-wide">
              ubiquitous models rather than parallel initiatives. Seamlessly
              reinvent success.
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-center px-11 pt-5 pb-8 w-full text-center text-fuchsia-900 bg-pink-100 rounded-xl border-2 border-solid border-zinc-400 max-md:px-5 max-md:mt-6">
            <img
              loading="lazy"
              src={home2d} style={{borderRadius: '30%'}}
              className="aspect-square w-[65px]"
            />
            <div className="mt-5 text-2xl font-semibold tracking-wider">
              Best Teachers
            </div>
            <div className="self-stretch mt-5 text-base tracking-wide">
              ubiquitous models rather than parallel initiatives. Seamlessly
              reinvent success.
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Home2half
