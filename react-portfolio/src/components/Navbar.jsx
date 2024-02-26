import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
// import { logo, menu, close } from "../assets";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle((prev) => !prev);
  };

  const handleLinkClick = () => {
    setToggle(false);
  };
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className=" w-full flex justify-between items-center max-w-7xl mx-auto">
        <NavLink to={navLinks[0].to}>
          <img src="logo.png" alt="logo" className=" w-24   object-contain" />
        </NavLink>
        <ul className=" list-none hidden sm:flex flex-row gap-10 text-secondary ">
          {navLinks.map((link, index) => (
            <li key={index}>
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
              {navLinks.map((link, index) => (
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
    </nav>
  );
};

export default Navbar;
