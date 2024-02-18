import React from "react";

const ServiceCard = ({ name }) => {
  return (
    <>
      <div className=" p-4  rounded-xl flex flex-col items-center bg-slate-200 md:w-[14rem] lg:w-[19rem] w-[22rem] hover:">
        <img className="w-60" src="../../public/coffee2.png" alt="" />
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
