import React from "react";

const Textbox = ({ name, description }) => {
  return (
    <>
      <div className="container dark:bg-black dark:text-white">
        <div className="py-8 px-0 ">
          <div className=" flex flex-col justify-center items-center md:px-20 bg-black/20">
            <h1 className=" text-xl text-[#FDBF60]">{name}</h1>
            <p className=" md:text-[15px] block md:my-4 my-2 mx-0">
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Textbox;
