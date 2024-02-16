import { React, useState } from "react";
import Darkmode from "./Darkmode";
import { NavLink, Link } from "react-router-dom";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="dark:bg-header dark:text-white duration-200">
        <nav className=" flex justify-between items-center font-serif px-10 h-14 ">
          <Link to="/">
            <div className=" text-primery text-xs md:text-xl lg:text-2xl uppercase">
              Jaiswal Traders
            </div>
          </Link>

          <div>
            <ul className="gap-10 text-xs md:text-xl lg:text-2xl  items-center hidden sm:flex row">
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
              <Darkmode />
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
