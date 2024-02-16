import React from "react";
import Button from "./Button";

const Footer = () => {
  const buttonsData = [
    { img: "./Images/Logo/instagram.png" },
    { img: "./Images/Logo/linkedin.png" },
    { img: "./Images/Logo/twitter.png" },
    { img: "./Images/Logo/facebook.png" },
  ];

  return (
    <div className="bg-primary text-dimWhite font-poppins">
      <div className="sm:flex flex-col py-10 px-4 sm:px-5 overflow-hidden md:px-24">
        <div className="flex flex-col sm:flex-row ">
          <div className="flex sm:items-start  items-center  flex-col gap-5 sm:w-[100%] sm:pr-10 mr-0 md:w-1/2">
            <h1 className="text-4xl">Frontend Developer</h1>
            <p className="text-xl mb-5">
              I am a frontend developer and I create websites. I am always
              learning new technologies. Currently, I am learning ReactJS to
              develop beautiful websites.
            </p>
            <h1 className="text-3xl underline text-secondary">
              Social Media Links
            </h1>
            <div className="flex gap-10 mb-5 sm:gap-10">
              {buttonsData.map((button, index) => (
                <Button key={index} img={button.img} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5 mt-5 sm:mt-0 sm:w-full md:w-1/2">
            <h1 className=" flex text-3xl underline justify-center text-secondary">
              Contact Details
            </h1>
            <Button
              text="balvantkushwaha44@gmail.com"
              img="./Images/Logo/message.gif"
            />
            <Button text="+91: 7323917450" img="./Images/Logo/phone.gif" />
            <Button img="./Images/Logo/twitter.png" />
          </div>
        </div>
      </div>
      <div className=" py-4 bg-green-600 ">
        <h1 className="flex font-bold justify-center">
          @2024 Copyright:Balvantkushwaha.com
        </h1>
      </div>
    </div>
  );
};

export default Footer;
