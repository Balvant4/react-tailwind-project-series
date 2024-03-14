import React, { useState } from "react";
import { styles } from "../../styles";
// import { logo, menu, close } from "../assets";

import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle((prev) => !prev);
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5  top-0 z-20 `}
    >
      <div className=" w-full flex justify-between items-center max-w-7xl mx-auto">
        <img src="logo.png" alt="logo" className=" w-24   object-contain" />

        <ul className=" list-none hidden sm:flex flex-row gap-10 text-secondary ">
          <button className=" px-4 py-1 bg-green-500 text-white rounded">
            Contact
          </button>
        </ul>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex items-center gap-5">
          <div>
            <button className=" px-4 py-1 bg-green-500 text-white rounded">
              Contact
            </button>
          </div>
          <div
            onClick={toggleMenu}
            className="cursor-pointer text-3xl text-secondary"
          >
            {toggle ? <RxCross2 /> : <IoMenu />}
          </div>

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 absolute top-12 right-0 sidebar`}
          >
            <ul className="px-10 mr-[-28px] bg-primary rounded-xl text-secondary">
              <h1>Error</h1>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
