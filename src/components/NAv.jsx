import React from 'react'

const NAv = () => {
  return (
    <>
     <div className="flex z-10 gap-5 items-start px-20 pt-3.5 pb-7 w-full text-lg bg-fuchsia-700 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
        <div className="flex gap-5 w-full text-fuchsia-700 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="..."
            className="shrink-0 max-w-full aspect-[1.41] w-[113px]"
          />
          <div className="flex flex-auto gap-0 my-auto max-md:flex-wrap max-md:max-w-full">
            <div className="grow justify-center items-start px-4 py-4 bg-white rounded-md w-fit max-md:pr-5 max-md:max-w-full">
              Search...
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/17da6d3c3256ec3c955f7b687dcd2fffa409eb28131c5c1caf79a4144bac187c?"
              className="shrink-0 aspect-[1.52] w-[70px]"
            />
          </div>
        </div>
        <div className="flex gap-5 self-start mt-3 text-white max-md:flex-wrap">
          <div className="grow">Home</div>
          <div className="flex gap-1.5">
            <div className="grow">Slime Shop</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e64ce90508034502b0beb489a1d204b7652f35cebfa3a28adb476a40b342a7e?"
              className="shrink-0 my-auto aspect-[1.49] fill-white w-[9px]"
            />
          </div>
          <div className="flex gap-5 max-md:flex-wrap">
            <div className="grow font-sans">Subscription Box</div>
            <div className='font-sans'>Gift Card</div>
            <div className='font-sans'>Slime FAQ</div>
            <div className='font-sans'>About</div>
            <div className='font-sans'>Contact Us</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-4 font-medium">
        <div className="flex flex-col items-start pl-20 text-white whitespace-nowrap max-md:pl-5">
          {/* <div className="ml-3.5 max-md:ml-2.5">2</div> */}
          {/* <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/33e48cc0d5e7133425fdcd62d8b9829fbb9b91adc45082cdb62fb093e0f27faf?"
            className="aspect-square w-[33px]"
          /> */}
        </div>
        
        <div className="justify-center px-4 py-1.5 mt-5 text-fuchsia-900 bg-yellow-400 rounded">
          Join Now
        </div>
      </div>
    </div>
    </>
  )
}

export default NAv
