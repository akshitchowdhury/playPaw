import React from 'react';
import bday from '../../assets/bday2.png';
import kparty from '../../assets/kitty2.jpg';
import cafe from '../../assets/Cafe.png';
import eParty from '../../assets/event2.png';

import './Home2half.css'
import { Link } from 'react-router-dom';


const Home2half = () => {
  return (
    <>
      <div className="bubblegum-sans-regular self-center mt-8 text-4xl tracking-wider text-center text-fuchsia-900 max-w-[90%] mx-auto">
        Providing Good Qualities For Your Loving Kids
      </div>

      <div className="self-center px-4 mt-8 w-full max-w-[90%] mx-auto">
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Link to="/birthday">
          <div className="Servecard flex flex-col items-center px-5 py-8 w-full text-center text-fuchsia-900 bg-pink-100 rounded-xl border-2 border-solid border-zinc-400">
            <img
              loading="lazy"
              src={bday}
              style={{ borderRadius: '30%' }}
              className="aspect-square w-[65px]"
              alt="Bus Service"
            />
            <div className="bubblegum-sans-regular mt-5 text-2xl font-semibold tracking-wider">Birthdays</div>
            <div className="mt-5 text-base tracking-wide">
              Ubiquitous models rather than parallel initiatives. Seamlessly reinvent success.
            </div>
          </div>
          </Link>

          <Link to="/event">
          <div className="Servecard flex flex-col items-center px-5 py-8 w-full text-center text-white bg-fuchsia-950 rounded-xl border-2 border-solid border-zinc-400">
            <img
              loading="lazy"
              src={eParty}
              style={{ borderRadius: '30%' }}
              className="aspect-square w-[65px]"
              alt="Sports Training"
            />
            <div className="bubblegum-sans-regular mt-5 text-2xl font-semibold tracking-wider">Event Parties</div>
            <div className="mt-5 text-base tracking-wide">
              Ubiquitous models rather than parallel initiatives. Seamlessly reinvent success.
            </div>
          </div>
          </Link>

          <Link to="/kitty">
          <div className="Servecard flex flex-col items-center px-5 py-8 w-full text-center text-fuchsia-900 bg-pink-100 rounded-xl border-2 border-solid border-zinc-400">
            <img
              loading="lazy"
              src={kparty}
              style={{ borderRadius: '30%' }}
              className="aspect-square w-[65px]"
              alt="Music Training"
            />
            <div className="bubblegum-sans-regular mt-5 text-2xl font-semibold tracking-wider">Kitty Parties</div>
            <div className="mt-5 text-base tracking-wide">
              Ubiquitous models rather than parallel initiatives. Seamlessly reinvent success.
            </div>
          </div>
          </Link>

          <Link to="/cafe">
          <div className="Servecard flex flex-col items-center px-5 py-8 w-full text-center text-white bg-fuchsia-950 rounded-xl border-2 border-solid border-zinc-400">
            <img
              loading="lazy"
              src={cafe}
              style={{ borderRadius: '30%' }}
              className="aspect-square w-[65px]"
              alt="Best Teachers"
            />
            <div className="bubblegum-sans-regular mt-5 text-2xl font-semibold tracking-wider">Cafe</div>
            <div className="mt-5 text-base tracking-wide">
              Ubiquitous models rather than parallel initiatives. Seamlessly reinvent success.
            </div>
          </div>
          </Link>

        </div>
      </div>
    </>
  );
};

export default Home2half;
