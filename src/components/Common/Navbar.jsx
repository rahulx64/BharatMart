import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2";
import { BsCart } from "react-icons/bs";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { AiOutlineBars } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  const togglenavdrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <div>
          <Link to="/" className="text-2xl font-bold text-blue-600">
            BHARATMART
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link
            to="/collection/all"
            className="text-gray-400 hover:text-black text-sm font-medium uppercase"
          >
            men
          </Link>
          <Link
            to="#"
            className="text-gray-400 hover:text-black text-sm font-medium uppercase"
          >
            women
          </Link>
          <Link
            to="#"
            className="text-gray-400 hover:text-black text-sm font-medium uppercase"
          >
            top wear
          </Link>
          <Link
            to="#"
            className="text-gray-400 hover:text-black text-sm font-medium uppercase"
          >
            bottom wear
          </Link>
        </div>

        <div className="flex items-center space-x-4">
            
            <Link to="/admin" className="text-pink-300 hover:text-pink-900 "  >admin</Link>

          <Link to="/profile" className="hover:text-black">
            <HiOutlineUser className="h-6 w-6 text-gray-400 hover:text-black" />
          </Link>

          <button onClick={toggleDrawer} className="relative hover:text-black">
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-400 hover:text-black" />
            <span className="absolute -top-1  bg-red-900 text-white text-xs font-bold rounded-full px-2 py-0.5">
              3
            </span>
          </button>

          <div className="overflow-hidden">
            <SearchBar />
          </div>

          <button onClick={togglenavdrawer} className="md:hidden">
            <HiBars3BottomRight className="h-6 w-6 text-gray-400 hover:text-black" />
          </button>
        </div>
      </nav>

      <CartDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
      {/* mobile navigation */}

      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          navDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={togglenavdrawer}>
            <IoMdClose className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">MENU</h2>

          <nav className="space-y-4">
            <Link
              to="#"
              onClick={togglenavdrawer}
              className="block text-gray-500 text-sm hover:text-black"
            >
              MEN
            </Link>

            <Link
              to="#"
              onClick={togglenavdrawer}
              className="block text-gray-500 text-sm hover:text-black"
            >
              WOMEN
            </Link>

            <Link
              to="#"
              onClick={togglenavdrawer}
              className="block text-gray-500 text-sm hover:text-black"
            >
              TOP-WEAR
            </Link>

            <Link
              to="#"
              onClick={togglenavdrawer}
              className="block text-gray-500 text-sm hover:text-black"
            >
              BOTTOM-WEAR
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
