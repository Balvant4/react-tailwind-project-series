import React from "react";
import { coffeebeansbg, playstore, appstore } from "../../public/index";

const BgImage = {
  backgroundImage: `url(${coffeebeansbg})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const AppStore = () => {
  return (
    <>
      <div style={BgImage}>
        <div className=" p-10 font-poppins grid md:grid-cols-12 bg-servicefooter overflow-hidden">
          <div
            className=" col-span-7  flex flex-col justify-center"
            data-aos="fade-right"
          >
            <h1 className=" lg:text-5xl md:text-4xl text-3xl pb-5 text-white">
              Coffee Cafe is available for Android and IOS
            </h1>
            <div className=" md:w-[12rem] lg:w-[15rem] w-[10rem] flex md:flex-row pb-5">
              <img src={playstore} alt="" />
              <img src={appstore} alt="" />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default AppStore;
