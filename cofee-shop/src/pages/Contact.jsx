import React from "react";
import { PiAddressBook } from "react-icons/pi";
import { FaPhone } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";

const Contact = () => {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mt-8 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                  Get in touch
                </h1>
                <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                  Fill in the form to start a conversation
                </p>

                <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                  <PiAddressBook />
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    Chapra, Baniyapur, Bihar, 841403
                  </div>
                </div>

                <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                  <FaPhone />
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    +91 8235168910
                  </div>
                </div>

                <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                  <CgMail />
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    info@acme.org
                  </div>
                </div>
              </div>

              <form className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <div className="flex flex-col">
                  <label htmlFor="name" className="hidden">
                    Full Name
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                <div className="flex flex-col mt-2">
                  <label htmlFor="email" className="hidden">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                <div className="flex flex-col mt-2">
                  <label htmlFor="tel" className="hidden">
                    Number
                  </label>
                  <input
                    type="tel"
                    name="tel"
                    id="tel"
                    placeholder="Telephone Number"
                    className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
