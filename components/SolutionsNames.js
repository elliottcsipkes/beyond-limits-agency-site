import React from "react";
import { MdArrowForward } from "react-icons/md";

const SolutionsNames = () => {
  return (
    <div className="bg-gray-200">
      <div id="coreSolutions" className="transparent bg-white mt-[-4vh] h-10" />
      <div className="container mx-auto pb-16">
        <div className="flex justify-center">
          <h2 className="text-center text-4xl w-fit font-semibold sm:text-5xl pt-20 bg-clip-text text-transparent bg-gradient-to-bl from-[#ff6633] to-[#3f007c]">
            Core Solutions
          </h2>
        </div>
        <div className="block md:grid md:grid-rows-2 md:grid-flow-col md:gap-8 pt-12 pb-4 justify-center text-center text-gray-700 w-4/5 m-auto">
          <div className="flex flex-col w-full pb-4 sm:pt-4">
            <p>ICON</p>
            {/* <img
              className="w-full pb-4"
              src="/Marketing.svg"
              alt="paid social advertising"
            /> */}
            <h3 className="font-semibold text-lg">Marketing Consulting</h3>
            <p className="p-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Distinctio ratione harum quae! Facere sunt officiis, id non
              deserunt commodi, nulla sit nobis aliquam hic est corrupti odio!
              Illo, veniam quidem.
            </p>
            <div className="flex items-center justify-center pb-2">
              <a
                href="#_"
                className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-[50px]"
              >
                <span className="w-full h-full bg-gradient-to-bl from-[#ff6633] to-[#3f007c] group-hover:from-[#3f007c]group-hover:to-[#ff6633] absolute"></span>
                <span className="flex items-center relative px-6 py-3 transition-all bg-gray-100 rounded-[50px] group-hover:bg-opacity-0 ease-out duration-200">
                  <p className="relative text-sm md:text-lg text-gray-700 group-hover:text-white">
                    More On Marketing Consulting
                  </p>
                </span>
              </a>
            </div>
          </div>
          <div className="flex flex-col w-full pb-2 sm:pt-4">
            <p>ICON</p>
            {/* <img
              className="w-full pb-4"
              src="/Marketing.svg"
              alt="paid social advertising"
            /> */}
            <h3 className="font-semibold text-lg">Paid Social Advertising</h3>
            <p className="p-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Distinctio ratione harum quae! Facere sunt officiis, id non
              deserunt commodi, nulla sit nobis aliquam hic est corrupti odio!
              Illo, veniam quidem.
            </p>
            <div className="flex items-center justify-center pb-2">
              <a
                href="#_"
                className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-[50px]"
              >
                <span className="w-full h-full bg-gradient-to-bl from-[#ff6633] to-[#3f007c] group-hover:from-[#3f007c]group-hover:to-[#ff6633] absolute"></span>
                <span className="flex items-center relative px-6 py-3 transition-all bg-gray-100 rounded-[50px] group-hover:bg-opacity-0 ease-out duration-200">
                  <p className="relative text-sm md:text-lg text-gray-700 group-hover:text-white">
                    More On Paid Social Advertisting
                  </p>
                </span>
              </a>
            </div>
          </div>
          <div className="flex flex-col w-full pb-4 sm:pt-4">
            <p>ICON</p>
            {/* <img
              className="w-full pb-4"
              src="/Social-Communication.svg"
              alt="social media managment"
            /> */}
            <h3 className="font-semibold text-lg">Social Media Management</h3>
            <p className="p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              sit odio est voluptate non nulla? Dignissimos iusto, error labore
              consequatur sequi voluptatibus ea blanditiis impedit! Neque
              eveniet mollitia unde inventore.
            </p>
            <div className="flex items-center justify-center pb-2">
              <a
                href="#_"
                className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-[50px]"
              >
                <span className="w-full h-full bg-gradient-to-bl from-[#ff6633] to-[#3f007c] group-hover:from-[#3f007c]group-hover:to-[#ff6633] absolute"></span>
                <span className="flex items-center relative px-6 py-3 transition-all bg-gray-100 rounded-[50px] group-hover:bg-opacity-0 ease-out duration-200">
                  <p className="relative text-sm md:text-lg text-gray-700 group-hover:text-white">
                    More On Social Media Management
                  </p>
                </span>
              </a>
            </div>
          </div>
          <div className="flex flex-col w-full pb-2 sm:pt-4">
            <p>ICON</p>
            {/* <img
              className="w-full pb-4"
              src="/Developer-activity.svg"
              alt="search engine optimization"
            /> */}
            <h3 className="font-semibold text-lg">
              Search Engine Optimization
            </h3>
            <p className="p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus vel
              incidunt qui architecto corrupti non ducimus rerum, consectetur
              minus nam voluptatum. Rem libero dolor nam tempore odit, dolore
              praesentium ipsam!
            </p>
            <div className="flex items-center justify-center pb-2">
              <a
                href="#_"
                className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-[50px] "
              >
                <span className="w-full h-full bg-gradient-to-bl from-[#ff6633] to-[#3f007c] group-hover:from-[#3f007c]group-hover:to-[#ff6633] absolute"></span>
                <span className="flex items-center relative px-6 py-3 transition-all bg-gray-100 rounded-[50px] group-hover:bg-opacity-0 ease-out duration-200">
                  <p className="relative text-sm md:text-lg text-gray-700 group-hover:text-white">
                    More On Search Engine Optimization
                  </p>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsNames;
