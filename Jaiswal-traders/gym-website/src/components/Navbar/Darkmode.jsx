import React, { useState, useEffect } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";


const Darkmode = () => {
  const local = localStorage.getItem("theme");
  const [theme, setTheme] = useState(local || "theme");
  const element = document.documentElement;

  useEffect(() => {
    if (theme == "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }, [theme]);
  localStorage.setItem("theme", theme);
  return (
    <>
      <div className=" cursor-pointer">
        {theme == "dark" ? (
          <BiSolidSun onClick={() => setTheme("light")} />
        ) : (
          <BiSolidMoon onClick={() => setTheme("dark")} />
        )}
      </div>
    </>
  );
};

export default Darkmode;
