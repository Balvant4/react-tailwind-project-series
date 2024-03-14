import React from "react";
import { Backenddata } from "../index";

const Backend = () => {
  return (
    <>
      <div className=" md:w-[50%]  bg-boxes  rounded mb-5 ">
        <div className=" p-5 ">
          <h1 className=" text-xl font-semibold pb-5">Backend</h1>
          <div className=" flex flex-wrap gap-4">
            {Backenddata.map((item, index) => (
              <button
                className="px-3 py-1 bg-primary rounded flex flex-col items-center"
                key={index}
              >
                {item.text}
                <img className=" md:w-20 w-14" src={item.image} alt="image" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Backend;
