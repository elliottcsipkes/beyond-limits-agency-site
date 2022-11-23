import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="flex sm:flex-row justify-around items-center h-[80vh] flex-col-reverse">
        <div className="sm:w-[50%] sm:mr-[-24px] grid h-screen place-items-center ">
          <div className="text-center sm:text-left">
            <h1 className="text-4xl lg:ml-[-4px] md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-semibold bg-clip-text text-transparent bg-gradient-to-bl from-[#ff6633] via-[#860097] to-[#3f007c]">
              Beyond Limits
            </h1>
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
                href="#_"
                class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-[50px] mr-2"
              >
                <span class="w-full h-full bg-gradient-to-bl from-[#ff6633] to-[#3f007c] group-hover:from-[#3f007c]group-hover:to-[#ff6633] absolute"></span>
                <span class="relative px-6 py-3 transition-all ease-out bg-white rounded-[50px] group-hover:bg-opacity-0 duration-200">
                  <span class="relative text-sm md:text-lg text-grey-700 group-hover:text-white">
                    Learn More
                  </span>
                </span>
              </a>
              <a
                href="#_"
                class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-[50px] ml-2"
              >
                <span class="w-full h-full bg-gradient-to-bl from-[#ff6633] to-[#3f007c] group-hover:from-[#3f007c]group-hover:to-[#ff6633] absolute"></span>
                <span class="relative px-6 py-3 transition-all bg-white rounded-[50px] group-hover:bg-opacity-0 ease-out duration-200">
                  <span class="relative text-sm md:text-lg text-grey-700 group-hover:text-white">
                    Book a Consult
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="sm:w-[50%] grid h-screen place-items-center">
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
