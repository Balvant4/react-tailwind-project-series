import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav>
      <div className="font-poppins flex items-center justify-between py-5 px-10 bg-primary text-dimWhite">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Link to="/">
            <img
              className=" w-32 rounded h-10"
              src="./Images/Logo/balvant-logo.png"
              alt=""
            />
          </Link>
        </motion.span>

        {/* Main Navigation */}
        <ul className="hidden text-xl sm:flex gap-10">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/project">Project</NavItem>
          <NavItem to="/service">Services</NavItem>
          <NavItem to="/contact">Contact</NavItem>
          <NavItem to="/github">Github</NavItem>
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
            } absolute top-10 right-0 rounded-xl sidebar `}
          >
            {/* Sidebar Navigation */}
            <ul className="text-[18px] p-8 bg-primary flex   flex-col gap-3 items-center">
              <NavItem to="/">Home</NavItem>
              <NavItem to="/about">About</NavItem>
              <NavItem to="/project">Project</NavItem>
              <NavItem to="/service">Services</NavItem>
              <NavItem to="/contact">Contact</NavItem>
              <NavItem to="/github">Github</NavItem>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Custom NavItem component to wrap NavLink with additional styling
const NavItem = ({ to, children }) => (
  <li>
    <NavLink to={to}>{children}</NavLink>
  </li>
);

export default Navbar;
