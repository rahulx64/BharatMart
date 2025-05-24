import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { RiTwitchLine, RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";
import { Link } from "react-router-dom";
import { AiOutlineCopyright } from "react-icons/ai";
import {FiPhoneCall} from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <footer className="border-t py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0">
          <div>
            <h3 className="text-lg text-gray-800 mb-4">NewsLetter</h3>
            <p className="text-gray-500 font-medium mb-4">
              Be the first to hear our products
            </p>
            <p className="font-medium text-sm mb-4 text-green-400">
              signupp get upto 10% off
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="enter emal"
                className="p-3 w-full text-sm border-t border-b border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
              />
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-r-md hover:bg-gray-900 transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-lg text-blue-800 mb-4">Shop</h3>
            <ul className="space-y-2 text-blue-300">
              <li>
                <Link to="#" className="hover:text-blue-800 transition-colors">
                  Men Top Wears
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-blue-800 transition-colors">
                  Women top wear
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-blue-800 transition-colors">
                  Women Botoon Wears
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-blue-800 transition-colors">
                  Men Bottom Wears
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg text-blue-800 mb-4">Support</h3>
            <ul className="space-y-2 text-blue-300">
              <li>
                <Link to="#" className="hover:text-blue-800 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-blue-800 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-blue-800 transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-blue-800 transition-colors">
                  Features
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg text-blue-900">Follow us</h3>
            <div className="flex item-center space-x-4 mb-6">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferer"
                className="hover:text-blue-800"
              >
                <TbBrandMeta className="h-5 w-5" />
              </a>

              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferer"
                className="hover:text-blue-800"
              >
                <IoLogoInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferer"
                className="hover:text-blue-800"
              >
                <RiTwitterXLine className="h-5 w-5" />
              </a>
            </div>

            <p className="text-gray-500">call us</p>
            <p>
              <FiPhoneCall className="inline-block mr-2" />
              +91-7667600961
            </p>
          </div>
        </div>

        <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-300 pt-6">
          <p className="text-green-500 text-sm tracking-tighter flex items-center justify-center gap-1">
            <AiOutlineCopyright className="h-6 w-6" />
            2025, CompileTab All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
