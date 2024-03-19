import React from 'react';
import home2a from '../../assets/homekid2a.jpg';
import home2b from '../../assets/homekid2b.jpg';
import home2c from '../../assets/homekid2c.jpg';
import home2d from '../../assets/homekid2d.jpg';
import './Home2half.css'


const Home2half = () => {
  return (
    <>
      <div className="bubblegum-sans-regular self-center mt-8 text-4xl tracking-wider text-center text-fuchsia-900 max-w-[90%] mx-auto">
        Providing Good Qualities For Your Loving Kids
      </div>

      <div className="self-center px-4 mt-8 w-full max-w-[90%] mx-auto">
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="Servecard flex flex-col items-center px-5 py-8 w-full text-center text-fuchsia-900 bg-pink-100 rounded-xl border-2 border-solid border-zinc-400">
            <img
              loading="lazy"
              src={home2a}
              style={{ borderRadius: '30%' }}
              className="aspect-square w-[65px]"
              alt="Bus Service"
            />
            <div className="mt-5 text-2xl font-semibold tracking-wider">Bus Service</div>
            <div className="mt-5 text-base tracking-wide">
              Ubiquitous models rather than parallel initiatives. Seamlessly reinvent success.
            </div>
          </div>

          <div className="Servecard flex flex-col items-center px-5 py-8 w-full text-center text-white bg-fuchsia-950 rounded-xl border-2 border-solid border-zinc-400">
            <img
              loading="lazy"
              src={home2b}
              style={{ borderRadius: '30%' }}
              className="aspect-square w-[65px]"
              alt="Sports Training"
            />
            <div className="mt-5 text-2xl font-semibold tracking-wider">Sports Training</div>
            <div className="mt-5 text-base tracking-wide">
              Ubiquitous models rather than parallel initiatives. Seamlessly reinvent success.
            </div>
          </div>

          <div className="Servecard flex flex-col items-center px-5 py-8 w-full text-center text-fuchsia-900 bg-pink-100 rounded-xl border-2 border-solid border-zinc-400">
            <img
              loading="lazy"
              src={home2c}
              style={{ borderRadius: '30%' }}
              className="aspect-square w-[65px]"
              alt="Music Training"
            />
            <div className="mt-5 text-2xl font-semibold tracking-wider">Music Training</div>
            <div className="mt-5 text-base tracking-wide">
              Ubiquitous models rather than parallel initiatives. Seamlessly reinvent success.
            </div>
          </div>

          <div className="Servecard flex flex-col items-center px-5 py-8 w-full text-center text-white bg-fuchsia-950 rounded-xl border-2 border-solid border-zinc-400">
            <img
              loading="lazy"
              src={home2d}
              style={{ borderRadius: '30%' }}
              className="aspect-square w-[65px]"
              alt="Best Teachers"
            />
            <div className="mt-5 text-2xl font-semibold tracking-wider">Best Teachers</div>
            <div className="mt-5 text-base tracking-wide">
              Ubiquitous models rather than parallel initiatives. Seamlessly reinvent success.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home2half;
