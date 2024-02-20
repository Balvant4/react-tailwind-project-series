import React from "react";
import data from "../Testmonial/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className=" lg:w-3/4 w-[80%] m-auto mb-10 mt-10 font-sans">
      <h1
        className=" font-cursive font-bold text-4xl flex justify-center"
        data-aos="fade-down-right"
      >
        Testmonials
      </h1>
      <div className="mt-20">
        <Slider {...settings} className="slick-slider-custom">
          {data.map((d) => (
            <div key={d.name} className="px-2 ">
              <div className="bg-gray-100 h-[25rem] rounded-xl hover:bg-primary hover:text-white ">
                <div className="flex justify-center items-center h-56 rounded-t-xl ">
                  <img
                    className="h-44 w-44 rounded-full"
                    src={d.img}
                    alt={d.name}
                  />
                </div>
                <div className="flex flex-col items-center justify-center  gap-4 p-4 ">
                  <p className="text-xl font-semibold">{d.name}</p>
                  <p className="text-center">{d.review}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
