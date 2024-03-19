import React from 'react'

import homeKid from '../../assets/homekid1.jpg'

import './Home.css'

const Home = () => {
  return (
    <div className="home overflow-hidden px-20 py-20 -mt-5 w-full fill-yellow-400 max-md:px-5 max-md:max-w-full">
    <div className=" flex gap-5 max-md:flex-col max-md:gap-0">
      <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col self-stretch my-auto text-6xl text-fuchsia-900 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          <div className="z-10 tracking-widest border-white border-solid border-[3px] max-md:max-w-full max-md:text-4xl">
            Welcome to Kiddy Rainbow Slime CO.
          </div>
          <div className="tracking-widest border-fuchsia-900 border-solid border-[3px] max-md:max-w-full max-md:text-4xl">
            Welcome to Kiddy Rainbow Slime CO.
          </div>
          <div className="mt-5 text-lg text-fuchsia-950 max-md:max-w-full">
            Formulate innovative web-readiness and installed base ideas.
            Distinctively integrate high-payoff paradigms without next
            generation systems disseminate holistic e-services through
            customer directed expertise.
          </div>
          <div className="justify-center self-start px-8 py-2.5 mt-5 text-lg font-medium text-white bg-fuchsia-900 rounded-md border-4 border-fuchsia-700 border-solid max-md:px-5">
            Join now
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col mt-8 max-md:mt-10 max-md:max-w-full">
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src={homeKid}
                  className="grow w-full aspect-[1.49] max-md:mt-7"
                />
              </div>
              <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src={homeKid}
                  className="mt-3.5 w-full aspect-[1.49] max-md:mt-10"
                />
              </div>
            </div>
          </div>
          <div className="z-10 self-end max-w-full w-[533px]">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src={homeKid}
                  className="shrink-0 mt-4 max-w-full aspect-[0.88] w-[155px] max-md:mt-8"
                />
              </div>
              <div className="flex flex-col ml-5 w-[70%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src= {homeKid}
                  className="grow w-full aspect-[1.49] max-md:mt-3.5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Home
