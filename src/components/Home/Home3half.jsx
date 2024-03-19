import React from 'react';
import homeKid3 from '../../assets/homekid3.jpg';

const Home3half = () => {
  return (
    <div className="flex flex-col mt-32 pb-20 w-full bg-fuchsia-900 max-md:mt-10 max-md:max-w-full">
      <div className="self-center mt-12 w-full max-w-[1276px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch px-5 my-auto text-white max-md:mt-10 max-md:max-w-full">
              <div className="text-xl tracking-wide max-md:max-w-full">
                More About Us
              </div>
              <div className="mt-3.5 text-4xl tracking-wider max-md:max-w-full">
                Special Care For Your Children
              </div>
              <div className="mt-6 text-base tracking-wide max-md:max-w-full">
                Formulate innovative web-readiness and installed base ideas.
                Distinctively integrate high-payoff paradigms without next
                generation systems disseminate holistic e-services through
                customer directed expertise.
              </div>
              <div className="justify-center self-start px-8 py-2.5 mt-8 text-lg font-medium text-fuchsia-900 bg-gray-200 rounded-md border-4 border-fuchsia-700 border-solid max-md:px-5">
                Learn more
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src={homeKid3}
              className="grow w-full aspect-[1.56] max-md:mt-10 max-md:max-w-full"
              style={{ borderRadius: '7%' }}
              alt="Children"
            />
          </div>
        </div>
      </div>
      <div className="self-center px-5 mt-2 max-w-full w-[875px]">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[28%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col text-2xl tracking-wider text-center text-white max-md:mt-10">
              <div className="self-center">45</div>
              <div className="mt-8">Qualified Teachers</div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[31%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-2xl tracking-wider text-center text-white max-md:mt-10">
              <div className="self-center">20</div>
              <div className="mt-8">Years Of Experience</div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col text-2xl tracking-wider text-center text-white max-md:mt-10">
              <div className="self-center">565</div>
              <div className="mt-8">Students Enrolled</div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[13%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-2xl tracking-wider text-center text-white max-md:mt-10">
              <div className="self-center">15</div>
              <div className="mt-8">Total Groups</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home3half;
