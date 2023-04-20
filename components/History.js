import React from "react";
import { MdInsights, MdSchool, MdTipsAndUpdates } from "react-icons/md";

const History = () => {
  return (
    <div>
      <svg width="0" height="0">
        <linearGradient id="po-gradient" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop stopColor="#ff6633" offset="0%" />
          <stop stopColor="#3f007c" offset="100%" />
        </linearGradient>
      </svg>
      <div id="history" className="transparent bg-gray-200 mt-[-4vh] h-10" />
      <div className="bg-white">
        <div className="container mx-auto text-center">
          <div className="flex justify-center">
            <h2 className="text-3xl sm:pb-2 w-fit font-semibold sm:text-5xl pt-20 bg-clip-text text-transparent bg-gradient-to-bl from-[#ff6633] to-[#3f007c]">
              Agency History
            </h2>
          </div>
          <div className="flex text-gray-700 columns-2 pb-16 text-left items-center pt-16">
            <div className="flex basis-1/3 justify-center auto">
              <MdTipsAndUpdates
                class=""
                style={{ fill: "url(#po-gradient)" }}
                size={90}
              />
            </div>
            <div className="basis-2/3">
              <p className="text-xl">
                Since our launch in 2021, our marketing business has grown from
                a small start-up to a successful agency with a team of dedicated
                professionals. We began by offering social media management
                services to a handful of clients, helping them build their
                online presence and connect with their target audience.
              </p>
            </div>
          </div>
          <div className="flex columns-2 text-gray-700 pb-16 text-left items-center">
            <div className="flex basis-1/3 justify-center">
              <MdSchool style={{ fill: "url(#po-gradient)" }} size={90} />
            </div>
            <div className="basis-2/3">
              <p className="text-xl">
                As our reputation grew, we expanded our services to include paid
                social advertising and search engine optimization, providing our
                clients with a comprehensive approach to digital marketing. Over
                the years, we've worked with businesses of all sizes across
                various industries, helping them achieve their marketing goals
                and drive growth.
              </p>
            </div>
          </div>
          <div className="flex text-gray-700 columns-2 pb-20 text-left items-center">
            <div className="flex basis-1/3 justify-center">
              <MdInsights style={{ fill: "url(#po-gradient)" }} size={90} />
            </div>
            <div className="basis-2/3">
              <p className="text-xl">
                Our commitment to providing personalized, high-quality services
                has earned us a loyal customer base and numerous positive
                reviews. We're proud of the success we've achieved, and we look
                forward to continuing to help our clients succeed in the
                ever-changing digital landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
