// import React, { useState } from "react";

// import { Transition } from "@headlessui/react";
// const Accordion = ({ items }) => {
//   const [openIndex, setOpenIndex] = useState(null);

//   return (
//     <div className="w-full " style={{ padding: "4%" }}>
//       {items.map((item, index) => (
//         <div key={index} className="mb-2 " style={{ marginBottom: "4%" }}>
//           <button
//             className="w-full  flex justify-between items-center bg-pink-300 p-4 rounded-md focus:outline-none"
//             onClick={() => setOpenIndex(openIndex === index ? null : index)}
//             style={{ marginLeft: "20%", width: "60%" }}
//           >
//             <span
//               className="text-lg font-semibold flex items-center "
//               style={{ marginLeft: "40%" }}
//             >
//               {item.title}
//             </span>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className={`h-6 w-6 transition-transform transform ${
//                 openIndex === index ? "rotate-180" : ""
//               }`}
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M3 11c.99 0 2.428-.509 3.482-1.313C7.865 9.675 9 8.99 9 8c0-2.21-3-4-3-4s-3 1.79-3 4c0 1.844 1.134 2.683 2 3.187M9 8c0 1.104.896 2 2 2 .418 0 .791-.198 1.12-.511M9 8c0-1.104.896-2 2-2 .418 0 .791.198 1.12.511M9 8c0-.552.447-1 1-1 .552 0 1 .448 1 1"
//               />
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M15.693 10.287c1.054.804 2.491 1.313 3.482 1.313 0 0-3-1.79-3-4 0-1.104.896-2 2-2 1.104 0 2 .896 2 2 0 .99 1.135 1.675 2.518 2.687M15.693 10.287C14.03 11.666 13 12.877 13 14c0 1.104.896 2 2 2 1.104 0 2-.896 2-2 0-1.123-1.03-2.334-2.693-3.713M13 14c0 .552-.448 1-1 1-.553 0-1-.448-1-1"
//               />
//             </svg>
//           </button>
//           <Transition
//             show={openIndex === index}
//             enter="transition ease-out duration-200"
//             enterFrom="transform opacity-0 scale-0"
//             enterTo="transform opacity-100 scale-100"
//             leave="transition ease-in duration-150"
//             leaveFrom="transform opacity-100 scale-100"
//             leaveTo="transform opacity-0 scale-0"
//           >
//             <div className=" overflow-hidden transition-all duration-200">
//               <div className=" p-4 rounded-md">
//                 <div
//                   className=" flex flex-wrap "
//                   style={{
//                     width: '70%',
//                     padding: "5%",
//                     border: "3pt solid pink",
//                     borderRadius:
//                       "10px" /* Border radius to create a cream-shaped border */,
//                     boxShadow:
//                       "2px 2px 5px rgba(0, 0, 0, 0.2)" /* Light box shadow */,
//                   }}
//                 >
//                   <div
//                     className="w-full md:w-full md:pl-8"
//                     style={{
//                       height: "100px",

//                       fontWeight: "600",
//                       display: "flex",
//                       flexDirection: "row",
//                     }}
//                   >
//                     <p className="text-lg mb-4">
//                     {item.desc}
//                     </p>

//                     <img
//                       src={item.image}
//                       alt="Play Paw Logo"
//                       className="rounded-lg  mb-4"
//                       style={{

//                         marginLeft: "100px",
//                       }}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Transition>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Accordion;

import React, { useState } from "react";
import { Transition } from "@headlessui/react";

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="w-full" style={{ padding: "4%" }}>
      {items.map((item, index) => (
        <div key={index} className="mb-2">
        <button
  className="w-full flex justify-between items-center bg-pink-300 p-4 rounded-md focus:outline-none transition-colors duration-700 hover:bg-white"
  onClick={() => setOpenIndex(openIndex === index ? null : index)}
>
            <span className="text-lg font-semibold text-fuchsia-700">{item.title}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 transition-transform transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 11c.99 0 2.428-.509 3.482-1.313C7.865 9.675 9 8.99 9 8c0-2.21-3-4-3-4s-3 1.79-3 4c0 1.844 1.134 2.683 2 3.187M9 8c0 1.104.896 2 2 2 .418 0 .791-.198 1.12-.511M9 8c0-1.104.896-2 2-2 .418 0 .791.198 1.12.511M9 8c0-.552.447-1 1-1 .552 0 1 .448 1 1"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.693 10.287c1.054.804 2.491 1.313 3.482 1.313 0 0-3-1.79-3-4 0-1.104.896-2 2-2 1.104 0 2 .896 2 2 0 .99 1.135 1.675 2.518 2.687M15.693 10.287C14.03 11.666 13 12.877 13 14c0 1.104.896 2 2 2 1.104 0 2-.896 2-2 0-1.123-1.03-2.334-2.693-3.713M13 14c0 .552-.448 1-1 1-.553 0-1-.448-1-1"
              />
            </svg>
          </button>
          <Transition
            show={openIndex === index}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-0"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-150"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-0"
          >
            <div className="overflow-hidden transition-all duration-200">
              <div className="p-4 rounded-md ">
                <div
                  className="flex flex-col md:flex-row items-center md:items-start"
                  style={{
                    border: "3pt solid pink",
                    borderRadius: "10px",
                    backgroundColor: 'inherit',
                    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
                    padding: '5%'
                  }}
                >
                  <p className="text-lg mb-4 md:w-2/3 md:pr-8 text-pink-600" style={{fontFamily: 'cursive', fontSize:'1.5rem'}}>{item.desc}</p>
                  <img
                    src={item.image}
                    alt="Play Paw Logo"
                    className="rounded-lg md:w-1/3"
                  />
                </div>
              </div>
            </div>
          </Transition>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
