import React, { useState } from "react";
import {
  TEDropdown,
  TEDropdownToggle,
  TEDropdownMenu,
  TEDropdownItem,
  TERipple,
} from "tw-elements-react";

import {  faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../Nav.css'
import { Link } from "react-router-dom";

export default function DropdownBasicExample() {
  const [openTab, setOpenTab] = useState(false);

  return (
    <TEDropdown className="flex justify-center" style={{marginLeft: '-2rem'}}>
      <TERipple rippleColor="dark">
        <TEDropdownToggle
          className="dropdown flex items-center whitespace-nowrap rounded"
          onClick={() => setOpenTab(!openTab)} // Toggles openTab state
          
        >
          
          <span className="ml-2">
            <FontAwesomeIcon
              icon={faPaw}
              className={`h-6 w-6 transition-transform transform ${
                openTab ? "" : "rotate-180" // Rotate if openTab is true
              }`}
            />
          </span>
        </TEDropdownToggle>
      </TERipple>

      <TEDropdownMenu>
        <TEDropdownItem style={{backgroundColor: 'pink'}}>
          <Link to="/birthday">
            Birthday Celebrations
          </Link>
        </TEDropdownItem>
        <TEDropdownItem style={{backgroundColor: 'pink'}}>
          <Link to="/kitty">
            Kitty Parties
          </Link>
        </TEDropdownItem>
        <TEDropdownItem style={{backgroundColor: 'pink'}}>
          <Link to="/event">
            Event Parties
          </Link>
        </TEDropdownItem>
        <TEDropdownItem style={{backgroundColor: 'pink'}}>
          <Link to="/cafe">
            Cafe
          </Link>
        </TEDropdownItem>
      </TEDropdownMenu>
    </TEDropdown>
  );
}
