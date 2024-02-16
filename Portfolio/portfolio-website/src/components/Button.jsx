import React from "react";

const Button = ({ img, text }) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className=" text-xl font-poppins ">{text}</h1>
        <a href="">
          <img className="rounded-xl w-12" src={img} alt="" />
        </a>
      </div>
    </>
  );
};

export default Button;
