import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Quicklinks = () => {
  const [showLinks, setShowLinks] = useState(false);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <>
      <div className=" mb-4">
        <div className="flex justify-between items-center md:gap-5">
          <h1 className=" text-xl">Quick Links</h1>
          <button className=" text-3xl" onClick={toggleLinks}>
            {showLinks ? "-" : "+"}
          </button>
        </div>
        <hr />
        {showLinks && (
          <ul className=" text-xl leading-8">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Quicklinks;
