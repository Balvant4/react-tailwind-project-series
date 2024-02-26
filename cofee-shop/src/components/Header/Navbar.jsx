import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import navigationItems from "./navigationItem";
import { PiCoffeeLight } from "react-icons/pi";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle((prev) => !prev);
  };

  const handleLinkClick = (event) => {
    event.stopPropagation(); // Prevent click event from reaching the link
    setToggle(false); // Hide the mobile menu
  };

  return (
    <div
      className="bg-primary font-sans text-dimWhite w-full flex py-6 px-5  items-center justify-between navbar "
      data-aos="fade-down"
    >
      <div>
        <NavLink to={navigationItems[0].to}>
          <h1 className=" font-cursive text-white text-3xl">Coffee cafe</h1>
        </NavLink>
      </div>

      {/* Desktop Navigation */}
      <ul className="list-none sm:flex hidden ">
        {navigationItems.map((link, index) => (
          <li
            key={index}
            className="font-poppins cursor-pointer text-xl text-headertext mr-10"
          >
            <NavLink to={link.to}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
      <button className=" md:flex hidden items-center gap-2 px-4 py-2 text-white rounded-full bg-headerside">
        Order
        <PiCoffeeLight className=" text-2xl" />
      </button>

      {/* Mobile Navigation */}
      <div className="sm:hidden font-poppins">
        <div
          onClick={toggleMenu}
          className="cursor-pointer text-3xl text-white"
        >
          {toggle ? <RxCross2 /> : <IoMenu />}
        </div>

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 absolute top-12 right-0 sidebar`}
        >
          <ul className="px-10 mr-[-28px] bg-primary text-headertext rounded-xl">
            {navigationItems.map((link, index) => (
              <li
                key={index}
                className="cursor-pointer text-[16px] leading-8 py-2"
              >
                <NavLink to={link.to} onClick={handleLinkClick}>
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
