import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="min-h-16 w-full bg-gradient-to-tr from-[#3f007c] to-[#ff6633]">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-white">
        <ul className="flex transition-all font-medium text-md">
          <li className="p-4">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4">
            <Link href="/about">About</Link>
          </li>
          <li className="p-4">
            <Link href="/solutions">Solutions</Link>
          </li>
          <li className="p-4">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div className="text-center t p-2">
          <p>Copyright 2022 | Beyond Limits, LLC</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
