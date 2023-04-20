import React from "react";
import { MdArrowForward } from "react-icons/md";

const SolutionsList = () => {
  return (
    <div>
      <div id="fullSolutions" className="transparent bg-white mt-[-4vh] h-10" />
      <div className="container mx-auto">
        <div className="flex justify-center">
          <h2 className="text-center text-4xl w-fit font-semibold sm:text-5xl pt-20 bg-clip-text text-transparent bg-gradient-to-bl from-[#ff6633] to-[#3f007c]">
            Solutions Explained
          </h2>
        </div>
        <div id="marketingConsulting" className="flex justify-center">
          <div className="block lg:w-[80%] md:flex md:columns-2 md:gap-12 pt-12 pb-6 justify-between text-left items-center text-gray-700">
            <div className="w-full pl-10">
              <h3 className="font-semibold text-2xl pb-4">
                Marketing Consulting
              </h3>
              <p>
                One of our experienced consultants will join you for a{" "}
                <strong>15-minute </strong>
                Zoom call to discuss the current needs of your business. This
                call will allow both parties to determine if working together
                will be a good fit.
              </p>
              <a
                href="/contact"
                className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-[50px] mt-6 mb-4"
              >
                <span className="w-full h-full bg-gradient-to-bl from-[#ff6633] to-[#3f007c] group-hover:from-[#3f007c]group-hover:to-[#ff6633] absolute"></span>
                <span className="flex items-center relative px-6 py-3 transition-all bg-white rounded-[50px] group-hover:bg-opacity-0 ease-out duration-200">
                  <p className="relative text-sm md:text-lg text-gray-700 group-hover:text-white">
                    Book Now
                  </p>
                  <MdArrowForward className="relative ml-1 md:text-lg text-gray-700 group-hover:text-white" />
                </span>
              </a>
            </div>
            <div>
              <img
                className="w-full"
                src="/consulting.svg"
                alt="Zoom call consultation"
              />
            </div>
          </div>
        </div>
        <span id="smm"></span>
        <div className="flex justify-center">
          <div className="block lg:w-[80%] md:flex md:flex-row-reverse md:columns-2 md:gap-12 pt-12 pb-6 justify-between text-left items-center text-gray-700">
            <div className="w-full pl-10">
              <h3 className="font-semibold text-2xl pb-4">
                Social Media Management
              </h3>
              <p>
                Our team will create a proposed plan of action for the services
                that have been deemed essential for your business's growth.
                Whether that be <strong>Marketing Consulting, </strong>
                <strong>Facebook Ads Management</strong>,{" "}
                <strong>Social Media Account Management</strong>,{" "}
                <strong>Search Engine Optimization</strong>, or a mixture of our
                services, this proposal will layout timelines, goals,
                objectives, and <strong>guarantees </strong> for your business.
              </p>
              <a
                href="/contact"
                className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-[50px] mt-6 mb-4"
              >
                <span className="w-full h-full bg-gradient-to-bl from-[#ff6633] to-[#3f007c] group-hover:from-[#3f007c]group-hover:to-[#ff6633] absolute"></span>
                <span className="flex items-center relative px-6 py-3 transition-all bg-white rounded-[50px] group-hover:bg-opacity-0 ease-out duration-200">
                  <p className="relative text-sm md:text-lg text-gray-700 group-hover:text-white">
                    Get Started
                  </p>
                </span>
              </a>
            </div>
            <div>
              <img
                className="w-full md:ml-[-24px]"
                src="/Social-Engagement.svg"
                alt="proposal creation"
              />
            </div>
          </div>
        </div>
        <div id="paidSocial" className="flex justify-center">
          <div className="block lg:w-[80%] md:flex md:columns-2 md:gap-12 pt-12 pb-12 justify-between text-left items-center text-gray-700">
            <div className="w-full pl-10">
              <h3 className="font-semibold text-2xl pb-4">
                Paid Social Advertising
              </h3>
              <p>
                In <strong>less than a week</strong>, our team's proposal will
                be finished and ready for your approval! One of our expert
                consultants will present our plan over a short Zoom call and if
                you like what we bring to the table, we can proceed to the next
                steps of <strong>growing your business.</strong>
              </p>
              <a
                href="/contact"
                className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-[50px] mt-6 mb-4"
              >
                <span className="w-full h-full bg-gradient-to-bl from-[#ff6633] to-[#3f007c] group-hover:from-[#3f007c]group-hover:to-[#ff6633] absolute"></span>
                <span className="flex items-center relative px-6 py-3 transition-all bg-white rounded-[50px] group-hover:bg-opacity-0 ease-out duration-200">
                  <p className="relative text-sm md:text-lg text-gray-700 group-hover:text-white">
                    Grow Your Business
                  </p>
                </span>
              </a>
            </div>
            <div>
              <img
                className="w-full"
                src="/Design-stats.svg"
                alt="paid advertising"
              />
            </div>
          </div>
        </div>
        <div id="seo" className="flex justify-center  pb-10">
          <div className="block lg:w-[80%] md:flex md:flex-row-reverse md:columns-2 md:gap-12 pt-12 pb-6 justify-between text-left items-center text-gray-700">
            <div className="w-full pl-10">
              <h3 className="font-semibold text-2xl pb-4">
                Search Engine Optimization
              </h3>
              <p>
                Our team will create a proposed plan of action for the services
                that have been deemed essential for your business's growth.
                Whether that be <strong>Marketing Consulting, </strong>
                <strong>Facebook Ads Management</strong>,{" "}
                <strong>Social Media Account Management</strong>,{" "}
                <strong>Search Engine Optimization</strong>, or a mixture of our
                services, this proposal will layout timelines, goals,
                objectives, and <strong>guarantees </strong> for your business.
              </p>
              <a
                href="/contact"
                className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-[50px] mt-6 mb-4"
              >
                <span className="w-full h-full bg-gradient-to-bl from-[#ff6633] to-[#3f007c] group-hover:from-[#3f007c]group-hover:to-[#ff6633] absolute"></span>
                <span className="flex items-center relative px-6 py-3 transition-all bg-white rounded-[50px] group-hover:bg-opacity-0 ease-out duration-200">
                  <p className="relative text-sm md:text-lg text-gray-700 group-hover:text-white">
                    Get Started
                  </p>
                </span>
              </a>
            </div>
            <div>
              <img
                className="w-full md:ml-[-24px]"
                src="/Hand-coding.svg"
                alt="search engine optimization"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsList;
