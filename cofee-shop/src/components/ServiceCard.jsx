import React from "react";
import { coffee2 } from "../../public/index";
const ServiceCard = ({ name }) => {
  return (
    <>
      <div
        className=" p-4  rounded-xl flex flex-col items-center bg-slate-200 md:w-[14rem] lg:w-[19rem] w-[22rem] "
        data-aos="fade-right"
      >
        <img className="w-60" src={coffee2} alt="" />
        <h1 className=" text-2xl font-bold">{name}</h1>
        <p className=" text-[15px]">
          Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet
          ipsum dolor sit
        </p>
      </div>
    </>
  );
};

export default ServiceCard;
