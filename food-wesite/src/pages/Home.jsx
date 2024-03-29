import React from "react";
import { biryani2, biryani3, biryani5, vector3 } from "../../public/index";
import Service from "./Service";

const ImageList = [
  {
    id: 1,
    img: biryani2,
  },
  {
    id: 2,
    img: biryani3,
  },
  {
    id: 3,
    img: biryani5,
  },
];

const bgimage = {
  backgroundImage: `url(${vector3})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  with: "100%",
  height: "100%",
};

const Home = () => {
  const [image, setImage] = React.useState(biryani2);
  return (
    <>
      <div
        style={bgimage}
        className="flex justify-center items-center   min-h-[550px] sm:min-h-[600px]"
      >
        <div className=" grid lg:grid-cols-2 grid-cols-1  gap-16 lg:gap-0 p-5">
          <div className=" items-center flex flex-col lg:items-start">
            <h1 className=" lg:text-[5rem] text-[3.5rem] font-bold leading-[5rem]">
              Welcome to the Foodie Zone
            </h1>
            <p className=" pb-5 pt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              sint ex quod quos neque reprehenderit nihil suscipit iure vero
              deserunt.
            </p>
            <button className=" bg-maincolor p-2 rounded-full text-white px-4">
              Order Now
            </button>
          </div>
          {/* image section */}
          <div className="flex  lg:top-1/2  lg:-translate-y-1/2 lg:py-2 justify-center gap-4 lg:absolute  lg:right-8 ">
            <div>
              <img src={image} alt="" />
            </div>
            <div>
              {ImageList.map((item) => (
                <img
                  key={item.id} // Add a unique key prop
                  src={item.img}
                  onClick={() => setImage(item.img)} // Set the clicked image directly
                  alt="biryani img"
                  className="max-w-[80px] h-[80px] object-contain lg:flex lg:flex-col bg-white/30 rounded-xl"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Service />
    </>
  );
};

export default Home;
