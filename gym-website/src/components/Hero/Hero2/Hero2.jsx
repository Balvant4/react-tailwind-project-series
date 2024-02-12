import React from "react";
import Boxes from "./Components/Boxes";

const Hero2 = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        <div className="">
          <Boxes
            name="BALL BEARINGS"
            image="https://vwimpex.com/assets/img/category/ball_bearing.png"
          />
        </div>
        <div className="">
          <Boxes
            name="BEARING TOOLS"
            image="https://vwimpex.com/assets/img/category/bearing_tools.png"
          />
        </div>
        <div className="">
          <Boxes
            name="LINEAR GUIDS"
            image="https://vwimpex.com/assets/img/category/linear_guides.png"
          />
        </div>
        <div className="">
          <Boxes
            name="NILOS RING"
            image="https://vwimpex.com/assets/img/category/nilos.png"
          />
        </div>
        <div className="">
          <Boxes
            name="COUPLING"
            image="https://vwimpex.com/assets/img/category/coupling.png"
          />
        </div>
        <div className="">
          <Boxes
            name="GEARBOX"
            image="https://vwimpex.com/assets/img/category/gearbox.png"
          />
        </div>
      </div>
    </>
  );
};

export default Hero2;
