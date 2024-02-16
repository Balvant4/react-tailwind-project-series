import React from "react";
import biryani2 from "../../public/food-images/biryani2.png";
import Servicebox from "../components/Servicebox";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import AppStore from "../components/AppStore";

const Service = () => {
  return (
    <>
      <div className=" font-poppins">
        <div className=" flex flex-col py-5  items-center">
          <h2 className=" text-maincolor">Our Services</h2>
          <h1 className=" text-4xl font-bold">Services</h1>
          <p className=" lg:w-1/3 px-5 lg:px-0">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
            nesciunt explicabo a! Laborum delectus aliquam labore, earum rerum
            quam! Nulla?
          </p>
        </div>
        <div className=" flex flex-wrap lg:justify-evenly gap-6 px-5 justify-center">
          <Servicebox name="Biryani" image={biryani2} />
          <Servicebox name="Biryani" image={biryani2} />
          <Servicebox name="Biryani" image={biryani2} />
        </div>
      </div>

      {/* second services section */}
      <div className=" grid md:grid-cols-2 grid-cols-1 pb-20">
        <div>
          <img
            className=" lg:absolute  pt-10"
            src="../../public/food-images/biryani5.png"
            alt=""
          />
        </div>
        <div className=" mt-10 p-4">
          <div className=" md:pr-8">
            <h1 className=" text-4xl  font-bold pb-5">Lorem ipsum dolor</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              reiciendis inventore iste ratione ex alias quis magni at optio
            </p>
            <p className="pb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ab
              sed, exercitationem minima aliquid eligendi distinctio? Fugit
              repudiandae numquam hic quo recusandae. Excepturi totam ad nam
              velit quasi quidem aspernatur.
            </p>
          </div>
          <div className="flex gap-5 pb-5">
            <div>
              <GrSecure className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-violet-400" />
            </div>
            <div>
              <IoFastFood className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100 dark:bg-orange-400" />
            </div>
            <div>
              <GiFoodTruck className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100 dark:bg-green-400" />
            </div>
          </div>
          <button className=" bg-maincolor p-2 px-4 rounded-full text-white">
            Order Now
          </button>
        </div>
      </div>
      <AppStore />
    </>
  );
};

export default Service;
