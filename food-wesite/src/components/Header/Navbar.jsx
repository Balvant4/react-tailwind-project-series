import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import navigationItems from "./navigationItems";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle((prev) => !prev);
  };

  const handleLinkClick = () => {
    setToggle(false);
  };

  return (
    <div className="bg-primary text-dimWhite w-full flex py-6 px-5 justify-between items-center navbar">
      <div>
        <NavLink to={navigationItems[0].to}>
          <h1 className=" text-xl">Food Zone With Balvant</h1>
        </NavLink>
      </div>

      {/* Desktop Navigation */}
      <ul className="list-none sm:flex hidden">
        {navigationItems.map((link, index) => (
          <li
            key={index}
            className="font-poppins cursor-pointer text-[16px] mr-10"
          >
            <NavLink to={link.to}>{link.text}</NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation */}
      <div className="sm:hidden font-poppins">
        <div onClick={toggleMenu} className="cursor-pointer text-3xl">
          {toggle ? <RxCross2 /> : <IoMenu />}
        </div>

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 absolute top-12 right-0 sidebar`}
        >
          <ul className="px-10 mr-[-28px] bg-primary rounded-xl">
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
