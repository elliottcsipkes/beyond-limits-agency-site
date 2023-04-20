import React from "react";
import { MdArrowForward } from "react-icons/md";

const ContactHero = () => {
  return (
    <div>
      <div className="sm:mt-[0px] flex sm:flex-row justify-around items-center flex-col-reverse container mx-auto">
        <div className="sm:w-[50%] sm:mr-[-24px] grid place-items-center ">
          <div className="text-center sm:text-left">
            <div className="flex justify-center sm:justify-start">
              <h1 className="text-4xl w-fit sm:text-3xl lg:ml-[-4px] md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold bg-clip-text text-transparent bg-gradient-to-bl from-[#ff6633]  to-[#3f007c]">
                Contact Us
              </h1>
            </div>
            <p className="text-gray-700 text-base sm:text-l font-semibold pt-4">
              Send us an email and we'll help you take your business Beyond
              Limits.
            </p>
            <form
              action="/submission"
              method="POST"
              className="flex sm:w-[100%] max-h-96 flex-col items-center sm:pt-4 justify-center"
            >
              <div className="relative h-10 w-[90%] sm:w-full min-w-[200px] mt-4">
                <input
                  type="text"
                  name="name"
                  required
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-700 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-700 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-700 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-700 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  name
                </label>
              </div>
              <div className="relative h-10 w-[90%] sm:w-full min-w-[200px] mt-4">
                <input
                  type="email"
                  name="email"
                  required
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-700 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-700 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-700 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-700 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  email
                </label>
              </div>
              <div className="relative mt-4 w-[90%] sm:w-full min-w-[200px]">
                <textarea
                  name="message"
                  className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-700 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                ></textarea>
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-700 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-700 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-700 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-700">
                  message
                </label>
              </div>
              <div className="p-6 sm:pr-0 sm:pl-0 flex justify-center sm:justify-center">
                <a
                  href="/submission"
                  className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-[50px] ml-2"
                >
                  <span className="w-full h-full bg-gradient-to-bl from-[#ff6633] to-[#3f007c] group-hover:from-[#3f007c]group-hover:to-[#ff6633] absolute"></span>
                  <span className="flex items-center relative px-6 py-3 transition-all bg-white rounded-[50px] group-hover:bg-opacity-0 ease-out duration-200">
                    <button
                      type="submit"
                      value="Submit"
                      className="cursor-pointer transparent"
                    >
                      <p className="relative text-sm md:text-lg text-gray-700 group-hover:text-white">
                        Submit
                      </p>
                    </button>
                    <MdArrowForward className="relative ml-1 md:text-lg text-gray-700 group-hover:text-white" />
                  </span>
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="sm:w-[50%] mt-[26px] grid sm:h-screen place-items-center">
          <img
            className="max-h-fit text-center"
            src="/Business-trainning.svg"
            alt="business communication"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
