import React from "react";
import { Fronteddata } from "../index";

const Fronted = () => {
  return (
    <>
      <div className=" md:w-[50%]  bg-boxes  rounded mb-5 ">
        <div className=" p-5 ">
          <h1 className=" text-xl font-semibold pb-5">Fronted</h1>
          <div className=" flex flex-wrap gap-4">
            {Fronteddata.map((item, index) => (
              <button
                className="px-3 py-1 bg-primary rounded flex flex-col items-center"
                key={index}
              >
                {item.text}
                <img className=" md:w-20 w-14 " src={item.image} alt="image" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Fronted;
