import React from "react";
import { styles } from "../styles";
import Socialmedia from "./Socialmedia";
import { computerimg } from "../assets";

const Hero = () => {
  return (
    // <section className="  w-full md:h-screen md:pb-0 pb-14 mx-auto  bg-hero-pattern bg-cover bg-no-repeat bg-center ">
    //   <div
    //     className={`${styles.paddingX}  inset-0 pt-5 md:pt-[5rem] max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-5`}
    //   >
    //     <div className=" flex flex-col justify-center items-center mt-5">
    //       <div className=" w-5 h-5 rounded-full bg-[#915eff]" />
    //       <div className=" w-1 sm:h-80 h-40 violet-gradient" />
    //     </div>

    //     <div>
    //       <h1 className={`${styles.heroHeadText}`}>
    //         Hi, I'm <span className="text-[#915eff]">Balvant</span>
    //         <p className={`${styles.heroSubText}`}>
    //           A Passionate Front-end React Developer
    //           <br className=" sm:block hidden" /> based in Vadodara Gurajat
    //         </p>
    //       </h1>
    //       <div>
    //         <Socialmedia />
    //       </div>
    //     </div>
    //   </div>
    // </section>

    //using library daisyui
    <div className="hero lg:min-h-screen bg-hero-pattern bg-cover bg-no-repeat bg-center  py-5 md:py-0">
      <div className="hero-content flex-col md:flex-row-reverse items-center gap-0 md:gap-[1rem] lg:gap-[15rem]">
        <img
          src={computerimg}
          alt="Hero Image"
          className="max-w-full md:h-[35rem] h-[25rem] rounded-xl shadow-2xl md:w-full w-[80%] lg:w-2/5 mb-8"
        />

        <div className="w-full lg:w-3/5 px-4">
          <div>
            <h1 className={styles.heroHeadText}>
              Hi, I'm <span className="text-[#915eff]">Balvant</span>
            </h1>
            <p className={styles.heroSubText}>
              A Passionate Front-end React Developer
              <br className="sm:block hidden" /> based in Vadodara, Gujarat
            </p>
          </div>
          <div>
            <Socialmedia /> {/* Assuming this is your Socialmedia component */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
