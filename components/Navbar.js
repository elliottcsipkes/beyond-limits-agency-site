import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeShadow = () => {
      if (window.scrollY > 190) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", changeShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full left-0 top-0 z-10 bg-white shadow-md"
          : "fixed w-full left-0 top-0 z-10 bg-white"
      }
    >
      <div className="m-auto container flex justify-between items-center p-4 pb-1 pt-1 text-gray-700">
        <Link href="/">
          <img
            className="w-12"
            src="/BLlogoFullColor.svg"
            alt="Beyond Limits Logo"
          />
        </Link>
        <ul className="hidden sm:flex transition-all font-medium text-lg">
          <li className="p-5 ease-in bg-clip-text hover:text-transparent overflow-hidden hover:bg-gradient-to-tr from-[#3f007c] to-[#ff6633]">
            <Link href="/">Home</Link>
          </li>
          <li className="p-5 ease-in bg-clip-text hover:text-transparent overflow-hidden hover:bg-gradient-to-tr from-[#3f007c] to-[#ff6633]">
            <Link href="/about">About</Link>
          </li>
          <li className="p-5 ease-in bg-clip-text hover:text-transparent overflow-hidden hover:bg-gradient-to-tr from-[#3f007c] to-[#ff6633]">
            <Link href="/services">Services</Link>
          </li>
          <li className="p-5 ease-in bg-clip-text hover:text-transparent overflow-hidden hover:bg-gradient-to-tr from-[#3f007c] to-[#ff6633]">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div
          onClick={handleNav}
          className="sm:hidden block z-10 cursor-pointer"
        >
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
        {/*  Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute text-3xl font-medium top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300"
              : "sm:hidden absolute text-3xl font-medium top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300"
          }
        >
          <ul className="mb-48">
            <li className="p-8 ease-in bg-clip-text hover:text-transparent overflow-hidden hover:bg-gradient-to-tr from-[#3f007c] to-[#ff6633]">
              <Link onClick={handleNav} href="/">
                Home
              </Link>
            </li>
            <li className="p-8 ease-in bg-clip-text hover:text-transparent overflow-hidden hover:bg-gradient-to-tr from-[#3f007c] to-[#ff6633]">
              <Link onClick={handleNav} href="/about">
                About
              </Link>
            </li>
            <li className="p-8 ease-in bg-clip-text hover:text-transparent overflow-hidden hover:bg-gradient-to-tr from-[#3f007c] to-[#ff6633]">
              <Link onClick={handleNav} href="/services">
                Services
              </Link>
            </li>
            <li className="p-8 ease-in bg-clip-text hover:text-transparent overflow-hidden hover:bg-gradient-to-tr from-[#3f007c] to-[#ff6633]">
              <Link onClick={handleNav} href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
