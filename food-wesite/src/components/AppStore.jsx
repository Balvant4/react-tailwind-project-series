import React from "react";

const AppStore = () => {
  return (
    <>
      <div className=" p-10 font-poppins grid md:grid-cols-12 bg-servicefooter">
        <div className=" col-span-7  flex flex-col justify-center">
          <h1 className=" lg:text-5xl md:text-4xl text-3xl pb-5">
            Food is Available for Android and IOS
          </h1>
          <div className=" md:w-[12rem] lg:w-[15rem] w-[10rem] flex md:flex-row pb-5">
            <img src="../../public/food-images/app_store.png" alt="" />
            <img src="../../public/food-images/play_store.png" alt="" />
          </div>
        </div>
        <div className="col-span-5 ">
          <img src="../../public/food-images/mobile_bike.gif" alt="" />
        </div>
      </div>
    </>
  );
};

export default AppStore;
