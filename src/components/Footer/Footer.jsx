import React from 'react'
import logo from '../../assets/logo.jpg'
const Footer = () => {
  return (
<div className="flex flex-col pt-14 pr-7 pb-8 pl-20 mt-11 w-full bg-neutral-900 max-md:px-5 max-md:mt-10 max-md:max-w-full" 
style={{ backgroundSize: 'cover', marginTop: '-1px'}}>
      <div className="max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[54%] max-md:ml-0 max-md:w-full">
            <div className="max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[74%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col max-md:mt-10">
                  <img
            loading="lazy"
            src= {logo}
            className="shrink-0 max-w-full aspect-[1.41] w-[113px] " style={{borderRadius: '50%'}}
          />
          
                    <div className="mt-6 text-2xl text-center text-white">
                      ABOUT COMPANY
                    </div>
                    <div className="mt-7 text-base tracking-wide text-neutral-500">
                      Sapien luctus lesuada sentus pharetra nisi quisuea aenean
                      eros mus magnis arcu vehicula nascetur feugiat
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b04814a6475b7e6e21c849ea669e59c5f40245e743046847011ea10b0d6c5de?"
                      className="mt-7 max-w-full aspect-[4.76] w-[186px]"
                    />
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[26%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow mt-24 text-base text-neutral-500 max-md:mt-10">
                    <div className="text-2xl text-center text-white">
                      Our Services
                    </div>
                    <div className="mt-6 tracking-wide">Online class</div>
                    <div className="mt-6 tracking-wide">Baby care</div>
                    <div className="mt-5 tracking-wide">Shop</div>
                    <div className="mt-5 tracking-wide">Kids Playzone</div>
                    <div className="mt-5 tracking-wide">Nurse</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[46%] max-md:ml-0 max-md:w-full">
            <div className="grow mt-24 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col text-base text-neutral-500 max-md:mt-10">
                    <div className="text-2xl text-center text-white">
                      Useful links
                    </div>
                    <div className="mt-6 tracking-wide">About us</div>
                    <div className="mt-6 tracking-wide">Our team</div>
                    <div className="mt-6 tracking-wide">Privacy policy</div>
                    <div className="mt-5 tracking-wide">Contact us</div>
                    <div className="mt-5 tracking-wide">Terms of service</div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[70%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-sm text-white max-md:mt-10">
                    <div className="text-2xl text-center">Newsletter</div>
                    <div className="mt-7 text-base tracking-wide text-neutral-500">
                      Aplications prodize before front end ortals visualize
                      front end
                    </div>
                    <div className="justify-center items-start px-2.5 py-4 mt-7 tracking-wide border border-solid bg-neutral-900 border-zinc-800 text-neutral-500 max-md:pr-5">
                      Your email
                    </div>
                    <div className="justify-center items-center px-16 py-4 mt-2.5 tracking-wide whitespace-nowrap bg-amber-500 max-md:px-5">
                      Subscribe
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shrink-0 mt-8 h-px border border-solid bg-zinc-800 border-zinc-800 max-md:max-w-full" />
      <div className="self-center mt-7 text-base tracking-wide text-neutral-500 max-md:max-w-full">
        @copyright 2024 Powered by Innomatrics Technologies
      </div>
    </div>  )
}

export default Footer
