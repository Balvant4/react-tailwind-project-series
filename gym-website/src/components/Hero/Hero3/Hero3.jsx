import React from "react";
import Textbox from "./components/textbox";

const Hero3 = () => {
  return (
    <>
      <div className="dark:bg-black dark:text-white">
        <div className=" flex flex-col justify-center items-center pt-5 gap-5">
          <h1 className=" text-4xl text-primery">Our Values</h1>
          <h1 className=" text-xl px-3">
            We're built on reputation. So you know your satisfaction is our
            highest priority.
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 ">
          <div className="">
            <Textbox
              name="COMMITMENT"
              description="We are passionate about what we do. We believe our work makes a difference to the way our customers can do business."
            />
          </div>
          <div className="">
            <Textbox
              name="CUSTOMER-DRIVEN"
              description="We put our customers at the centre of our business approach and consistently strive to exceed their expectations."
            />
          </div>
          <div className="">
            <Textbox
              name="EXCELLENCE"
              description="We strive to bring innovation to enhance our customer’s business. We contribute to our industry’s expertise, knowledge and encourage our people to think afresh everyday."
            />
          </div>
          <div className="">
            <Textbox
              name="QUALITY"
              description="We assure customers of right quality to our products, services and processes, and seek to have partners who also share our high standards."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero3;
