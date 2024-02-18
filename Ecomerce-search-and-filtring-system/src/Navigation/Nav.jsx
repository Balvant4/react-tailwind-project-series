import React from "react";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

const Nav = () => {
  return (
    <>
      <nav className="border-b-2 border-gray-300 z-999 flex md:justify-around items-center p-5  ">
        <div>
          <input
            className=" bg-[#f7f6f6] py-3 px-5 rounded-lg outline-none border-0  mr-5 w-56"
            type="text"
            placeholder="Enter your search shoes"
          />
        </div>

        <div className="flex">
          <a href="#">
            <FiHeart className="w-6 h-6 ml-8 " />
          </a>
          <a href="">
            <AiOutlineShoppingCart className="w-6 h-6 ml-8 " />
          </a>
          <a href="">
            <AiOutlineUserAdd className="w-6 h-6 ml-8 " />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Nav;
