import React from "react";
import navigationItems from "../Header/navigationItem";
import { NavLink } from "react-router-dom";
import Footercompo from "./Footercompo";
import { FaCoffee } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer class=" bg-footercolor  text-white font-sans">
        <div class="container md:px-5 px-0 md:py-20 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          {/* Footer text last section */}
          <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
            <div class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <FaCoffee className=" text-4xl" />
              <span class="ml-3 text-2xl">Footer</span>
            </div>
            <p class="mt-2 text-sm ">
              We Provide Best Coffee in the World and also services to our
              Clients.
            </p>
          </div>
          <div class="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left order-first">
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="   tracking-widest text-2xl font-bold mb-3">LINKS</h2>
              <nav class="list-none mb-10 ">
                {navigationItems.map((link, index) => (
                  <li
                    key={index}
                    className="font-poppins cursor-pointer text-xl mr-10  "
                  >
                    <NavLink to={link.to}>{link.text}</NavLink>
                  </li>
                ))}
              </nav>
            </div>
            <div class="  lg:w-1/4 md:w-1/2 w-full px-4 mb-10">
              <Footercompo
                heading="Names"
                h1="Meet"
                h2="raghu"
                h3="kunal"
                h4="ravi"
              />
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4 mb-10">
              <Footercompo
                heading="Changes"
                h1="LOREM"
                h2="LOREM"
                h3="LOREM"
                h4="LOREM"
              />
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4 mb-10">
              <Footercompo
                heading="Importants"
                h1="LOREM"
                h2="LOREM"
                h3="LOREM"
                h4="LOREM"
              />
            </div>
          </div>
        </div>

        {/* SMALL fOOTER  */}
        <div class=" bg-button flex justify-center items-center">
          <div class=" mx-auto py-4 px-5 ">
            <p class=" text-sm text-center sm:text-left">
              © 2024 BALVANT KUSHWAHA{" "}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
