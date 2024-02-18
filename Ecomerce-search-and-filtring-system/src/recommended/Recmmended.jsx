import React from "react";

const Recmmended = () => {
  return (
    <>
      <div className="font-poppins lg:ml-80 ml-5 mt-5">
        <h2 className="mb-5">Recommended</h2>
        <div className="">
          <button className=" bg-maincolor px-4 py-2 ml-3 rounded mb-4">
            All Product
          </button>
          <button className=" bg-maincolor px-4 py-2 ml-3 rounded mb-4">
            Nike
          </button>
          <button className=" bg-maincolor px-4 py-2 ml-3 rounded mb-4">
            Adidas
          </button>
          <button className=" bg-maincolor px-4 py-2 ml-3 rounded mb-4">
            Puma
          </button>
          <button className=" bg-maincolor px-4 py-2 ml-3 rounded mb-4">
            Vans
          </button>
        </div>
      </div>
    </>
  );
};

export default Recmmended;
