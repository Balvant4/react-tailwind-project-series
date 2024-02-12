import React from "react";
import { NavLink } from "react-router-dom";

const bgStyle = {
  backgroundImage: `url(https://www.sabbearings.com/wp-content/uploads/2021/05/homepage-banner.jpg)`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Hero = () => {
  return (
    <>
      <div
        style={bgStyle}
        className="dark:bg-black text-white duration-200 font-sans"
      >
        <div className="container md:min-h-[620px] min-h-[420px] flex justify-center items-center dark:bg-black/50">
          <div className=" w-full flex flex-col  items-center justify-center  mx-auto gap-6 md:gap-10">
            <h1 className="text-4xl md:text-7xl lg:text-7xl text-primery">
              Jaiswal Traders
            </h1>
            <h1 className="text-2xl md:text-5xl lg:text-6xl">
              Start your shopping Jourey
            </h1>
            <h1 className="text-2xl md:text-4xl lg:text-5xl">
              We are Suppliers of Bearing
            </h1>
            <div>
              <button className=" mr-5 primery-btn">
                <NavLink to="contact">Contact</NavLink>
              </button>
              <button className="primery-btn">Check Products</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
