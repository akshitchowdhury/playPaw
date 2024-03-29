import React from "react";
import {
  TEDropdown,
  TEDropdownToggle,
  TEDropdownMenu,
  TEDropdownItem,
  TERipple,
} from "tw-elements-react";


import '../Nav.css'
import { Link } from "react-router-dom";

export default function DropdownBasicExample() {
  return (
    <TEDropdown className="flex justify-center">
      <TERipple rippleColor="dark">
        <TEDropdownToggle
          className= "dropdown flex items-center whitespace-nowrap rounded "
        >
          Event Parties
          <span className="ml-2 [&>svg]:w-5 w-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </TEDropdownToggle>
      </TERipple>

      <TEDropdownMenu>
        <TEDropdownItem  style={{backgroundColor: 'pink'}}>
          <Link to="/birthday">
            Birthday Celebrations
            </Link>
        </TEDropdownItem>
        <TEDropdownItem style={{backgroundColor: 'pink'}}>
        <Link to="/kitty" >
            Kitty Parties
          </Link>
        </TEDropdownItem>
        <TEDropdownItem style={{backgroundColor: 'pink'}}>
        <Link to="/event" >
            Event Parties
          </Link>
        </TEDropdownItem>
        <TEDropdownItem style={{backgroundColor: 'pink'}}>
        <Link to="/cafe" >
            Cafe
          </Link>
        </TEDropdownItem>
      </TEDropdownMenu>
    </TEDropdown>
  );
}
