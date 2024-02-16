import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav>
      <div className="sticky font-poppins flex items-center justify-between py-5 px-10 bg-primary text-dimWhite">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Link to="/">
            <img
              className="w-32 rounded h-10"
              src="./Images/Logo/balvant-logo.png"
              alt=""
            />
          </Link>
        </motion.span>

        {/* Main Navigation */}
        <ul className="hidden text-xl sm:flex gap-5 lg:gap-10">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/project">Project</NavLink>
          </li>
          <li>
            <NavLink to="/service">Services</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/github">Github</NavLink>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div
          className="sm:hidden text-2xl cursor-pointer"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? <RxCross2 /> : <IoIosMenu />}
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } absolute top-10 right-0 rounded-xl sidebar`}
          >
            {/* Sidebar Navigation */}
            <ul className="text-[18px] p-8 bg-primary flex flex-col gap-3 items-center">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/project">Project</NavLink>
              </li>
              <li>
                <NavLink to="/service">Services</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/github">Github</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
