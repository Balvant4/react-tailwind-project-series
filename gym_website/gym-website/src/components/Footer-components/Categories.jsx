import React from "react";
import { useState } from "react";

const Categories = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <>
      <div className="category leading-8 mb-4">
        <div className="flex justify-between items-center md:gap-5">
          <h1 className=" text-xl">Categories</h1>
          <button className=" text-3xl" onClick={toggleLinks}>
            {showLinks ? "-" : "+"}
          </button>
        </div>
        <hr />
        {showLinks && (
          <div className="text-xl leading-8">
            <h1>Lorem ipsum dolor sit.</h1>
            <h1>Lorem ipsum dolor sit.</h1>
            <h1>Lorem ipsum dolor sit.</h1>
            <h1>Lorem ipsum dolor sit.</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Categories;
