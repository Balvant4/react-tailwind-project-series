import React from "react";
import { project } from "../index";
import { styles } from "../styles";

const Projects = () => {
  return (
    <div className={`${styles.paddingX} py-5 font-poppins bg-primary `}>
      <h1 className=" text-3xl font-bold text-text">Projects</h1>
      <h2 className=" text-xl pt-5 text-secondary">All Projects Are Live</h2>
      <div
        className="  flex flex-wrap "
        style={{ marginRight: "-5px", marginLeft: "-5px" }} // Compensate for negative margins
      >
        {project.map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/4 mb-10 project-container"
            style={{ padding: "10px" }} // Add padding for spacing
          >
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <div className="bg-white rounded-xl h-full">
                <img className="rounded-t-lg" src={item.image} alt="" />
                <div className="px-5 py-5">
                  <h1 className="text-2xl font-bold">{item.header}</h1>
                  <p>{item.desc}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
