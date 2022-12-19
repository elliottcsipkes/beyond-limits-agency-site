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
          <div className="flex columns-2 pb-16 text-left items-center pt-16">
            <div className="flex basis-1/3 justify-center auto">
              <MdTipsAndUpdates
                class=""
                style={{ fill: "url(#po-gradient)" }}
                size={90}
              />
            </div>
            <div className="basis-2/3">
              <p className="text-xl">
                business started/founded: Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Neque rem laudantium fugit minus
                numquam, aliquam doloribus amet blanditiis quo quisquam animi
                dolores mollitia beatae itaque? Officia corporis cupiditate
                labore magni.
              </p>
            </div>
          </div>
          <div className="flex columns-2 pb-16 text-left items-center">
            <div className="flex basis-1/3 justify-center">
              <MdSchool style={{ fill: "url(#po-gradient)" }} size={90} />
            </div>
            <div className="basis-2/3">
              <p className="text-xl">
                business started: Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Neque rem laudantium fugit minus numquam,
                aliquam doloribus amet blanditiis quo quisquam animi dolores
                mollitia beatae itaque? Officia corporis cupiditate labore
                magni.
              </p>
            </div>
          </div>
          <div className="flex columns-2 pb-20 text-left items-center">
            <div className="flex basis-1/3 justify-center">
              <MdInsights style={{ fill: "url(#po-gradient)" }} size={90} />
            </div>
            <div className="basis-2/3">
              <p className="text-xl">
                business started: Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Neque rem laudantium fugit minus numquam,
                aliquam doloribus amet blanditiis quo quisquam animi dolores
                mollitia beatae itaque? Officia corporis cupiditate labore
                magni.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
