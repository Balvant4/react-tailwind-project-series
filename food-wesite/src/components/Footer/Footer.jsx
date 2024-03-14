import React from "react";
import { IoMdHome } from "react-icons/io";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Footercompo from "../Footercompo";
import { foodlogo } from "../../../public/index";

const Footer = () => {
  return (
    <>
      <div className=" font-poppins bg-primary text-white lg:p-20 p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4   ">
        <div>
          <div className="flex items-center gap-3">
            <img className=" w-[4rem]" src={foodlogo} alt="" />
            <h1 className=" font-bold text-2xl">FOODIE</h1>
          </div>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde facere
            ab hic accusamus omnis dolor voluptatibus illo, tempore eum tenetur.
          </p>
          <div className=" flex items-center gap-4 pt-5">
            <IoMdHome className="text-3xl" />
            <h1>Bihar, Patna Chappra</h1>
          </div>
          <div className="flex items-center gap-4 pt-5">
            <IoPhonePortraitOutline className="text-3xl" />
            <h1>+91 7323917450</h1>
          </div>
          <div className=" text-3xl gap-4 flex pt-5">
            <BsInstagram />
            <FaFacebook />
            <FaLinkedin />
          </div>
        </div>
        <div>
          <Footercompo />
        </div>
        <div>
          <Footercompo />
        </div>
        <div>
          <Footercompo />
        </div>
      </div>
    </>
  );
};

export default Footer;
