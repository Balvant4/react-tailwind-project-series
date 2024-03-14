import React from "react";
import { coffeetexture, whitecoffee } from "../../public/index";

import { IoLockClosedOutline } from "react-icons/io5";
import { FaMugHot } from "react-icons/fa";
import { PiThermometerColdFill } from "react-icons/pi";

const BgImage = {
  backgroundImage: `url(${coffeetexture})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const ServiceBanner = () => {
  return (
    <>
      <div style={BgImage}>
        <div className=" font-sans container w-full mt-10 min-h-[550px] flex justify-center items-center py-12 sm:py-0 ">
          <div className=" grid sm:grid-cols-2 grid-cols-1 gap-6">
            <div data-aos="fade-right">
              <img src={whitecoffee} alt="" />
            </div>

            <div
              className=" flex flex-col justify-center gap-6 sm:pt-0"
              data-aos="zoom-in"
            >
              <h1 className=" font-cursive font-bold text-3xl sm:text-4xl">
                Premium Blen Coffee
              </h1>
              <p className=" tracking-wide text-sm leading-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
                reiciendis inventore iste ratione ex alias quis magni at optio
              </p>

              <div>
                <div className=" grid grid-cols-2">
                  <div className="">
                    <div className=" flex gap-4 items-center pb-5">
                      <IoLockClosedOutline className="text-2xl h-12 w-12 p-3 rounded-full bg-red-100 shadow-sm" />
                      <h1>Premium Coffee</h1>
                    </div>
                    <div className=" flex gap-4 items-center pb-5">
                      <FaMugHot className="text-2xl h-12 w-12 p-3 rounded-full bg-orange-100 shadow-sm" />
                      <h1>Hot Coffee</h1>
                    </div>
                    <div className=" flex gap-4 items-center ">
                      <PiThermometerColdFill className="text-2xl h-12 w-12 p-3 rounded-full bg-pink-100 shadow-sm" />
                      <h1>Cold Coffee</h1>
                    </div>
                  </div>

                  <div className=" border-l-4 border-primary/50 pl-6 space-y-3">
                    <h1 className=" font-cursive font-bold text-xl">
                      Tea Lover
                    </h1>
                    <p className="">
                      Much like writing code, brewing the perfect cup of tea
                      requires patience, precision, and a dash of passion to
                      create a comforting blend of flavors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceBanner;
