import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { CgMail } from "react-icons/cg";
import { FaRegAddressCard } from "react-icons/fa6";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Contact = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <>
      <div className="category leading-8 ">
        <div className="flex justify-between items-center md:gap-5">
          <h1 className=" text-xl">Contact</h1>
          <button className=" text-3xl" onClick={toggleLinks}>
            {showLinks ? "-" : "+"}
          </button>
        </div>
        <hr />
        {showLinks && (
          <div className=" text-xl leading-10">
            <div className="flex gap-3 items-center">
              <FaRegAddressCard className=" text-2xl text-primery cursor-pointer animate-pulse group-hover:scale-150 duration-200" />
              <span>
                SCE 503 Motor Market Manimajra, Chandigrah India 160101
              </span>
            </div>
            <div className=" flex items-center gap-3">
              <BiPhoneCall className=" text-2xl text-primery cursor-pointer animate-pulse group-hover:scale-150 duration-200"></BiPhoneCall>
              <h1>+91-7323917450</h1>
            </div>
            <div className="flex items-center gap-3">
              <CgMail className=" text-2xl text-primery cursor-pointer animate-pulse group-hover:scale-150 duration-200" />
              <h1>balvantkumarsingh3@gmail.com</h1>
            </div>
            <button className=" mr-5 primery-btn">
              <NavLink to="contact">Contact</NavLink>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Contact;
