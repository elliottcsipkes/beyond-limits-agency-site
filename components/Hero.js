import React from "react";
import { MdArrowForward } from "react-icons/md";
const Hero = () => {
  return (
    <div>
      <div className="sm:mt-[0px] flex sm:flex-row justify-around items-center sm:h-[100vh] h-[95vh] flex-col-reverse container mx-auto">
        <div className="sm:w-[50%] sm:mr-[-24px] grid place-items-center ">
          <div className="text-center sm:text-left">
            <div className="flex justify-center sm:justify-start">
              <h1 className="text-5xl w-fit sm:text-4xl lg:ml-[-4px] md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-semibold bg-clip-text text-transparent bg-gradient-to-bl from-[#ff6633]  to-[#3f007c]">
                Beyond Limits
              </h1>
            </div>
            <p className="text-gray-700 text-base sm:text-xl font-semibold pt-4">
              We help businesses of all sizes scale and increase ROI.
            </p>
            <p className="text-gray-700 text-base md:text-lg font-base pt-4 sm:w-[80%] sm:pr-0 sm:pl-0 pr-2 pl-2">
              By implementing powerful paid social advertising, engaging social
              media campaigns, and credible SEO tactics, clients can expect
              exponential growth.
            </p>
            <div className="p-6 sm:pr-0 sm:pl-0 flex justify-center sm:justify-start">
              <a
                href="#learn"
                className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-[50px] mr-2"
              >
                <span className="w-full h-full bg-gradient-to-bl from-[#ff6633] to-[#3f007c] group-hover:from-[#3f007c]group-hover:to-[#ff6633] absolute"></span>
                <span className="relative px-6 py-3 transition-all ease-out bg-white rounded-[50px] group-hover:bg-opacity-0 duration-200">
                  <p className="relative text-sm md:text-lg text-gray-700 group-hover:text-white">
                    Learn More
                  </p>
                </span>
              </a>
              <a
                href="/contact"
                className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-[50px] ml-2"
              >
                <span className="w-full h-full bg-gradient-to-bl from-[#ff6633] to-[#3f007c] group-hover:from-[#3f007c]group-hover:to-[#ff6633] absolute"></span>
                <span className="flex items-center relative px-6 py-3 transition-all bg-white rounded-[50px] group-hover:bg-opacity-0 ease-out duration-200">
                  <p className="relative text-sm md:text-lg text-gray-700 group-hover:text-white">
                    Book a Consult
                  </p>
                  <MdArrowForward className="relative ml-1 md:text-lg text-gray-700 group-hover:text-white" />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="sm:w-[50%] mt-[26px] grid sm:h-screen place-items-center">
          <img
            className="max-h-fit text-center"
            src="/Social-influencer.svg"
            alt="social media marketing"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
