import React from "react";
import { social } from "../index";

const Socialmedia = () => {
  return (
    <div className="flex gap-5 pt-10">
      {social.map((item, index) => (
        <a
          href={item.link}
          key={index}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className=" w-12" src={item.image} alt="" />
        </a>
      ))}
    </div>
  );
};

export default Socialmedia;
