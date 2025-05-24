import React from "react";
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";
const Topbar = () => {
  return (
    <>
      <div className="bg-red-900 text-white">
        <div className="container mx-auto flex justify-between items-center py-2 px-4 ">
          <div className="hidden  md:flex items-center space-x-4 ">
            <a href="#" className="hover:text-gray-300">
              <TbBrandMeta className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-gray-300">
              <IoLogoInstagram className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-gray-300">
              <RiTwitterXLine className="h-5 w-5" />
            </a>
          </div>
          <div className="text-sm text-center">
            <span>BHARATMART desh ki Bazzar</span>
          </div>

          <div className="text-sm">
            <a href="tel:+1234567890" className="hover:text-gray-400">
              +91 7667600961
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
