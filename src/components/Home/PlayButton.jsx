import React from "react";
import { Link } from "react-router-dom";
import { TERipple } from "tw-elements-react";

export default function ButtonWithRipple() {
  return (
    <>
      <TERipple rippleColor="light">
        <button
          type="button"
          className="inline-block rounded-full bg-pink-400 px-8 py-3 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-pink-500 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-pink-500 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-pink-600 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          style={{ width: "400px", height: "50px" }} // Adjust width here
        >
          <Link  to="/contact">
            {" "}
            <span
              style={{
                fontWeight: "bold",
                color: "purple",
                fontSize: "1.2rem",
              }}
            >
              {" "}
              Join Us now!{" "}
            </span>
          </Link>
        </button>
      </TERipple>
    </>
  );
}
