import React, { useEffect, useState } from 'react';
import logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Footer.css';

const Footer = () => {
  const fixedLocation = [12.8904985, 77.5596266]; // Fixed location coordinates
  const [userLocation, setUserLocation] = useState(null);

  const redIcon = new L.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  useEffect(() => {
    // Get user's geolocation
    navigator.geolocation.getCurrentPosition(
      (geoLocation) => {
        const { latitude, longitude } = geoLocation.coords;
        setUserLocation({ lat: latitude, lng: longitude });
      },
      (error) => console.error("Error getting geolocation:", error),
      { enableHighAccuracy: true }
    );
  }, []);

  const handleMarkerClick = () => {
    const [lat, lng] = fixedLocation;
    const description = "Description of the fixed location";

    // Open Google Maps URL in a new tab
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${lat},${lng}&query_place_id=${description}`
    );
  };

  return (
    <div className="footer flex flex-col pt-14 pr-7 pb-8 pl-20 mt-11 w-full bg-neutral-900 max-md:px-5 max-md:mt-10 max-md:max-w-full" style={{ backgroundSize: "cover", marginTop: "-1px" }}>
      <div className="max-md:max-w-full">
        {/* Your existing content */}
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[54%] max-md:ml-0 max-md:w-full">
            <div className="max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[74%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col max-md:mt-10">
                    <img
                      loading="lazy"
                      src={logo}
                      className="shrink-0 max-w-full aspect-[1.41] w-[113px] "
                      style={{ borderRadius: "50%" }}
                    />

                    <div className="mt-6 text-2xl text-center text-white">
                      ABOUT COMPANY
                    </div>
                    <div className="mt-7 text-base tracking-wide text-neutral-500">
                      Play Pawws offers immersive indoor play experiences for
                      kids. We cultivate creativity, joy, and growth through
                      exciting activities, parties, and our inviting café. Come
                      visit today for unforgettable playtime!
                    </div>
                    
                    <div className="mt-7 text-base tracking-wide text-neutral-500">
                    Address: HRBR Service Road, Kalyan Nagar, Bengaluru, Karnataka 560043, India.
                    <br />
                    Contact no: +91-9740733118| +91-9740733118
                    </div>


                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[26%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow mt-24 text-base text-neutral-500 max-md:mt-10">
                    <div className="text-2xl text-center text-white">
                      Events Hosted by US
                    </div>
                    <div className="mt-6 tracking-wide">
                      <Link to="/birthday"> Birthday Parties</Link>
                    </div>
                    <div className="mt-6 tracking-wide">
                      <Link to="/kitty">Kitty Parties</Link>
                    </div>
                    <div className="mt-5 tracking-wide">
                      <Link to="/event">Event Parties</Link>
                    </div>
                    <div className="mt-5 tracking-wide">
                      <Link to="/cafe">Cafe</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Existing content ends here */}
          {/* Add your new content here */}
          <div className="flex flex-col ml-5 w-[46%] max-md:ml-0 max-md:w-full">
            <div className="grow mt-24 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col text-base text-neutral-500 max-md:mt-10">
                    <div className="text-2xl text-center text-white">
                      Useful links
                    </div>
                    <div className="mt-6 tracking-wide">
                      <Link to="/about"> About us </Link>
                    </div>
                    <div className="mt-6 tracking-wide">
                      <Link to="/franchise">Franchise</Link>
                    </div>
                    <div className="mt-6 tracking-wide">
                      <Link to="/events">Events</Link>
                    </div>
                    <div className="mt-5 tracking-wide">
                      <Link to="/pricing">Pricing</Link>
                    </div>
                    <div className="mt-5 tracking-wide">
                      <Link to="/contact">Contact</Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[70%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-sm text-white max-md:mt-10">
                    <div className="text-2xl text-center">Locate Us</div>
                    <div className="mini_map w-full  mt-6 mx-auto max-w-[400px]">
                      <MapContainer center={fixedLocation} zoom={13} className="main-map w-full h-96 md:h-full">
                        <TileLayer
                          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={fixedLocation} icon={redIcon} eventHandlers={{ click: handleMarkerClick }}>
                          <Popup>KK Industries</Popup>
                        </Marker>
                        {userLocation && (
                          <Marker position={userLocation}>
                            <Popup>User Location</Popup>
                          </Marker>
                        )}
                      </MapContainer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add your new content here */}
      {/* End of new content */}
      <div className="shrink-0 mt-8 h-px border border-solid bg-zinc-800 border-zinc-800 max-md:max-w-full" />
      <div className="self-center mt-7 text-base tracking-wide text-neutral-500 max-md:max-w-full">
        @copyright 2024 Powered by Innomatrics Technologies
      </div>
    </div>
  );
};

export default Footer;
