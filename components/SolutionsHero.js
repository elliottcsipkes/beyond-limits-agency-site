import React from "react";

const SolutionsHero = ({ link1, link2 }) => {
  return (
    <div>
      <div className="mt-16 sm:mt-[0px] flex sm:flex-row justify-around items-center h-[100vh] flex-col-reverse container mx-auto pb-4">
        <div className="sm:w-[50%] sm:mr-[-24px] grid h-screen place-items-center ">
          <div className="text-center sm:text-left">
            <div className="flex justify-center sm:justify-start">
              <h1 className="text-5xl w-fit sm:text-4xl lg:ml-[-4px] md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-semibold bg-clip-text text-transparent bg-gradient-to-bl from-[#ff6633]  to-[#3f007c]">
                Our Solutions
              </h1>
            </div>
            <p className="text-gray-700 text-base sm:text-xl font-semibold pt-4">
              Solutions for any budget designed for maximum growth potential.
            </p>
            <p className="text-gray-700 text-base md:text-lg font-base pt-4 sm:w-[80%] sm:pr-0 sm:pl-0 pr-2 pl-2">
              Regardless of your business's budget, our agency can tailor our
              services to meet your individual needs and see you succeed in
              increasing ROI and growing revenue.
            </p>
            <div className="p-6 sm:pr-0 sm:pl-0 flex justify-center sm:justify-start">
              <a
                href={link1}
                className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-[50px] mr-2"
              >
                <span className="w-full h-full bg-gradient-to-bl from-[#ff6633] to-[#3f007c] group-hover:from-[#3f007c]group-hover:to-[#ff6633] absolute"></span>
                <span className="relative px-6 py-3 transition-all ease-out bg-white rounded-[50px] group-hover:bg-opacity-0 duration-200">
                  <p className="relative text-sm md:text-lg text-gray-700 group-hover:text-white">
                    Core Solutions
                  </p>
                </span>
              </a>
              <a
                href={link2}
                className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-[50px] mr-2"
              >
                <span className="w-full h-full bg-gradient-to-bl from-[#ff6633] to-[#3f007c] group-hover:from-[#3f007c]group-hover:to-[#ff6633] absolute"></span>
                <span className="relative px-6 py-3 transition-all ease-out bg-white rounded-[50px] group-hover:bg-opacity-0 duration-200">
                  <p className="relative text-sm md:text-lg text-gray-700 group-hover:text-white">
                    Solutions Explained
                  </p>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="sm:w-[50%] grid h-screen place-items-center">
          <img
            className="max-h-fit text-center"
            src="/Business-solution.svg"
            alt="social media marketing"
          />
        </div>
      </div>
    </div>
  );
};

export default SolutionsHero;
