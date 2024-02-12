import React from "react";

const Boxes = ({ name, image }) => {
  return (
    <>
      <div className="container dark:bg-black dark:text-white">
        <div className="md:py-5 py-3 overflow-hidden flex  justify-center">
          <div className="relative md:w-[20rem] w-[22rem]  h-72 overflow-hidden ">
            <img
              className="absolute inset-0 w-full h-full object-cover rounded-xl  "
              src={image}
              alt=""
            />
            <div className="absolute  mt-[15rem] flex w-full h-screen   text-xl font-bold bg-black/50">
              <h1 className=" p-2">{name}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Boxes;
