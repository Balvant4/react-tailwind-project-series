import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className=" relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-5`}
      >
        <div className=" flex flex-col justify-center items-center mt-5">
          <div className=" w-5 h-5 rounded-full bg-[#915eff]" />
          <div className=" w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="text-[#915eff]">Balvant</span>
            <p className={`${styles.heroSubText}`}>
              I develop Full Stack Website, user{" "}
              <br className=" sm:block hidden" /> interfaces and web
              applications
            </p>
          </h1>
        </div>
        <div className=" bg-red-600 relative">
          <h1 className=" text-white"> add computer image balvant</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
