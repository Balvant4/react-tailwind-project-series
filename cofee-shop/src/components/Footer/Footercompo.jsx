import React from "react";

const Footercompo = ({ heading, h1, h2, h3, h4 }) => {
  return (
    <>
      <h2 class=" font-medium  tracking-widest text-xl mb-3">{heading}</h2>
      <div>
        <h1>{h1}</h1>
        <h1>{h2}</h1>
        <h1>{h3}</h1>
        <h1>{h4}</h1>
      </div>
    </>
  );
};

export default Footercompo;
