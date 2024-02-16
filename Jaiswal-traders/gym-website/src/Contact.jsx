import React from "react";

const Contact = () => {
  return (
    <>
      <div className="dark:bg-black dark:text-white md:m-5 py-5">
        <h1 className=" md:text-3xl flex justify-center pb-5 text-primery">
          Feel Free to Contact Us
        </h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118106.7177224753!2d73.09068444487777!3d22.322081830891648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0xac39d3bfe1473fb8!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1707389042802!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="container pt-5">
          <div className="contactform ">
            <form action="#" method="POST" className="flex flex-col gap-5">
              <input
                className="text-black md:w-96 w-full  py-2 px-4"
                type="text"
                name="username"
                placeholder="username"
                autoComplete="off"
                required
              />
              <input
                className=" text-black md:w-96 w-full py-2 px-4"
                type="email"
                name="Email"
                placeholder="Email"
                autoComplete="off"
                required
              />
              <textarea
                className="text-black md:w-96 w-full py-2 px-4 "
                placeholder="Message"
                name="message"
                id=""
                cols="30"
                rows="10"
                autoComplete="off"
                required
              ></textarea>
              {/* <input className=" mx-[30rem] py-2 px-4 " type="sumbit"  /> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
