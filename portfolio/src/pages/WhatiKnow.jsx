import React from "react";
import { styles } from "../styles";
import Fronted from "../components/Fronted";
import Backeddata from "../components/Backend";

const WhatiKnow = () => {
  return (
    <div className={`${styles.paddingX} text-text  font-poppins pb-5`}>
      <div>
        <h1 className="  text-2xl font-bold pb-5">What I Know</h1>
      </div>
      <div className="md:flex md:gap-5 ">
        <Fronted />
        <Backeddata />
      </div>
    </div>
  );
};

export default WhatiKnow;
