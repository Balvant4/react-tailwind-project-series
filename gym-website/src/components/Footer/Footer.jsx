import React from "react";
import Quicklinks from "../Footer-components/Quicklinks";
import Categories from "../Footer-components/Categories";
import Contact from "../Footer-components/Contact";

const Footer = () => {
  return (
    <>
      <div>
        <div className="dark:bg-header dark:text-white    md:px-16 items-center   font-sans p-5 ">
          <Quicklinks />
          <Categories />
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Footer;
