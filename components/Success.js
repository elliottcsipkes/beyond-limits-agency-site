import React from "react";

const Success = () => {
  return (
    <div className="h-[100vh] flex flex-col">
      <div className="m-auto">
        <div className="flex justify-center">
          <h1 className="text-4xl w-fit sm:text-3xl lg:ml-[-4px] md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold bg-clip-text text-transparent bg-gradient-to-bl from-[#ff6633]  to-[#3f007c]">
            Success
          </h1>
        </div>
        <p className="text-gray-700 text-center sm:text-xl font-semibold pt-4">
          We've received your information and will be returning an email to you
          shortly!
        </p>
        <div className="flex justify-center pt-8">
          <a
            href="/"
            className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-[50px]"
          >
            <span className="w-full h-full bg-gradient-to-bl from-[#ff6633] to-[#3f007c] group-hover:from-[#3f007c]group-hover:to-[#ff6633] absolute"></span>
            <span className="relative px-6 py-3 transition-all ease-out bg-white rounded-[50px] group-hover:bg-opacity-0 duration-200">
              <p className="relative text-sm md:text-lg text-gray-700 group-hover:text-white">
                Return to home
              </p>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Success;
