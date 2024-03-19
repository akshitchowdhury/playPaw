import React from 'react';
import hkida from '../../assets/homekid4a.jpg';
import hkidb from '../../assets/homekid4b.jpg';
import hkidc from '../../assets/homekid4c.jpg';
import hkidd from '../../assets/homekid4d.jpg';

const Home4half = () => {
  return (
    <div className="flex flex-col mt-8 mb-7 w-full max-w-[90%] mx-auto">
      <div className="self-center text-xl tracking-wide text-fuchsia-700">
        Educational Programs
      </div>
      <div className="self-center mt-4 text-4xl tracking-wider text-center text-indigo-950 max-w-[521px]">
        Step By Step Systematic Education
      </div>
      <div className="mt-8 grid gap-8 grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col">
          <div className="bg-white rounded-[40px] px-8 py-10">
            <div className="flex justify-center">
              <img
                loading="lazy"
                src={hkida}
                className="w-[175px] h-[175px] object-cover rounded-full"
                alt="Online Class"
              />
            </div>
            <div className="mt-6 text-xl font-semibold text-fuchsia-900">Online Class</div>
            <div className="mt-4 text-sm text-neutral-700">
              Eu turpis egestas pretium aenean pharetra magna ac.
            </div>
            <div className="mt-6 flex justify-center">
              <div className="underline">Read more</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="bg-white rounded-[40px] px-8 py-10">
            <div className="flex justify-center">
              <img
                loading="lazy"
                src={hkidb}
                className="w-[175px] h-[175px] object-cover rounded-full"
                alt="Formal Tuition"
              />
            </div>
            <div className="mt-6 text-xl font-semibold text-fuchsia-900">Formal Tuition</div>
            <div className="mt-4 text-sm text-neutral-700">
              Eu turpis egestas pretium aenean pharetra magna ac.
            </div>
            <div className="mt-6 flex justify-center">
              <div className="underline">Read more</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="bg-white rounded-[40px] px-8 py-10">
            <div className="flex justify-center">
              <img
                loading="lazy"
                src={hkidc}
                className="w-[175px] h-[175px] object-cover rounded-full"
                alt="Online Class"
              />
            </div>
            <div className="mt-6 text-xl font-semibold text-fuchsia-900">Online Class</div>
            <div className="mt-4 text-sm text-neutral-700">
              Eu turpis egestas pretium aenean pharetra magna ac.
            </div>
            <div className="mt-6 flex justify-center">
              <div className="underline">Read more</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="bg-white rounded-[40px] px-8 py-10">
            <div className="flex justify-center">
              <img
                loading="lazy"
                src={hkidd}
                className="w-[175px] h-[175px] object-cover rounded-full"
                alt="Formal Tuition"
              />
            </div>
            <div className="mt-6 text-xl font-semibold text-fuchsia-900">Formal Tuition</div>
            <div className="mt-4 text-sm text-neutral-700">
              Eu turpis egestas pretium aenean pharetra magna ac.
            </div>
            <div className="mt-6 flex justify-center">
              <div className="underline">Read more</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home4half;
