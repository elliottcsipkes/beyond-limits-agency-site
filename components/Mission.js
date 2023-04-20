import React from "react";

const Mission = () => {
  return (
    <div>
      <div id="mission" className="transparent bg-white mt-[-4vh] h-10" />
      <div className="bg-gray-200">
        <div className="container mx-auto text-center md:w-1/2">
          <div className="flex justify-center">
            <h2 className="text-4xl w-fit font-semibold sm:text-5xl pt-20 bg-clip-text text-transparent bg-gradient-to-bl from-[#ff6633] to-[#3f007c]">
              Our Mission
            </h2>
          </div>
          <p className="pt-4 text-gray-700 pb-20 text-xl">
            "Our mission at Beyond Limits is to grow our clients' businesses
            through proven best practices and innovative approaches to optimize
            return on investment."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
