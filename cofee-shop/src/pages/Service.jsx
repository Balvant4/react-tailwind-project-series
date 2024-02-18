import React from "react";
import ServiceCard from "../components/ServiceCard";
import ServiceBanner from "../components/ServiceBanner";
import AppStore from "../components/AppStore";
import Testmonials from "../components/Testmonials";

const Service = () => {
  return (
    <>
      <div className="flex flex-col items-center pt-5 ">
        <div>
          <h1 className=" font-cursive text-4xl">Best Coffee for you</h1>
        </div>
        <div className=" flex flex-wrap justify-start px-2 md:items-center gap-10 pt-10">
          <ServiceCard name="Espresso" />
          <ServiceCard name="Americano" />
          <ServiceCard name="Cappuccino" />
          <ServiceCard name="Indian" />
        </div>
        <div>
          <ServiceBanner />
          <AppStore />
        </div>
      </div>
    </>
  );
};

export default Service;
