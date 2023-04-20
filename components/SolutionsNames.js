import React from "react";
import {
  MdQuestionAnswer,
  MdManageAccounts,
  MdCode,
  MdPaid,
} from "react-icons/md";

const SolutionsNames = ({ link1, link2, link3, link4 }) => {
  return (
    <div className="bg-gray-200">
      <div id="coreSolutions" className="transparent bg-white mt-[-4vh] h-10" />
      <div className="container mx-auto pb-16">
        <div className="flex justify-center">
          <h2 className="text-center text-4xl w-fit font-semibold sm:text-5xl pt-20 bg-clip-text text-transparent bg-gradient-to-bl from-[#ff6633] to-[#3f007c]">
            Core Solutions
          </h2>
        </div>
        <div className="block md:grid md:grid-rows-2 md:grid-flow-col md:gap-8 pt-4 pb-4 justify-center text-center text-gray-700 w-[90%] m-auto">
          <div className="flex flex-col w-full pb-2 pt-4">
            <MdQuestionAnswer class="m-auto mb-4" size={70} />
            {/* <img
              className="w-full pb-4"
              src="/Marketing.svg"
              alt="paid social advertising"
            /> */}
            <h3 className="font-semibold text-lg">Marketing Consulting</h3>
            <p className="p-2">
              Marketing consulting is like having a trusted friend who's an
              expert in marketing. They'll give you great advice and guidance on
              how to improve your marketing strategies, so you can achieve your
              business goals.
            </p>
            <div className="flex items-center justify-center pb-2">
              <a
                href={link1}
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
          <div className="flex flex-col w-full pb-2 pt-4">
            <MdPaid class="m-auto mb-4" size={70} />
            {/* <img
              className="w-full pb-4"
              src="/Marketing.svg"
              alt="paid social advertising"
            /> */}
            <h3 className="font-semibold text-lg">Paid Social Advertising</h3>
            <p className="p-2">
              Paid social advertising is like having a megaphone for your
              business on social media. It's a way to reach a larger audience by
              paying to promote your content and target specific demographics to
              increase engagement, exposure, and drive more conversions.
            </p>
            <div className="flex items-center justify-center pb-2">
              <a
                href={link3}
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
          <div className="flex flex-col w-full pb-2 pt-4">
            <MdManageAccounts class="m-auto mb-4" size={80} />
            {/* <img
              className="w-full pb-4"
              src="/Social-Communication.svg"
              alt="social media managment"
            /> */}
            <h3 className="font-semibold text-lg">Social Media Management</h3>
            <p className="p-2">
              Not a wizz at Instagram, Facebook, and Twitter? Social media
              management is having an expert handle your social media channels,
              creating a strategy, posting content, and engaging with your
              audience to help grow your business online.
            </p>
            <div className="flex items-center justify-center pb-2">
              <a
                href={link2}
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
          <div className="flex flex-col w-full pb-2 pt-4">
            <MdCode class="m-auto mb-4" size={70} />
            {/* <img
              className="w-full pb-4"
              src="/Developer-activity.svg"
              alt="search engine optimization"
            /> */}
            <h3 className="font-semibold text-lg">
              Search Engine Optimization
            </h3>
            <p className="p-2">
              Search engine optimization (SEO) is like giving your website a VIP
              pass to the top of search engine results pages. With improved SEO,
              you can increase traffic to your website, improve online
              visibility, and attract consumers who are searching for what you
              offer.
            </p>
            <div className="flex items-center justify-center pb-2">
              <a
                href={link4}
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
