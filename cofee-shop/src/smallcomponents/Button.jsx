import React from "react";

const Button = ({ text }) => {
  return (
    <>
      <div>
        <button className=" md:flex hidden items-center gap-2 px-4 py-2 text-white rounded-full bg-headerside">
          {text}
        </button>
      </div>
    </>
  );
};

export default Button;
