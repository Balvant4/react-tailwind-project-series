import React from "react";
import style from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className={`flex md:flex-row flex-col ${style.paddingY}`}
      >
        <div
          className={` flex-1 ${style.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
        >
          <div className=" flex flex-row items-center py-[6px] px-4 bg-discound-graient rounded-[10px] mb-2">
            <img src={discount} alt="discount" className=" w-[32px] h-[32px]" />
            <p className={`${style.paragraph} ml-2`}>
              {" "}
              <span className="text-white">20%</span> Discount For{" "}
              <span className="text-white">1 Month</span> Account
            </p>
          </div>
          <div className="flex flex-row items-center justify-between w-full">
            <h1 className=" flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
              The Next <br className=" sm:block hidden" />{" "}
              <span className=" text-gradient">Generation</span> <br /> Payment
              Method.
            </h1>
            <div className="ss:flex hidden md:mr-4 mr-0 text-white">
              <GetStarted />
            </div>
          </div>

          <h1 className=" flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            {" "}
            <p className={`${style.paragraph} max-w-[470px] mt-5`}>
              Our team of experts uses a methodology to identify the credit
              cards most likely to fit your needs. we examine annual percentage
              rates, annual fees.
            </p>{" "}
          </h1>
        </div>

        <div></div>
      </section>
    </>
  );
};

export default Hero;
