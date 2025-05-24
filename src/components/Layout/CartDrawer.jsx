import React, { use } from "react";

import { IoMdClose } from "react-icons/io";
import CartContent from "../Cart/CartContent";
import { useNavigate } from "react-router-dom";
const CartDrawer = ({ drawerOpen, toggleDrawer }) => {
  const navigate = useNavigate();
  const handlecheckout=()=>{
         navigate("/checkout")
  }

  return (
    <>
      <div
        className={`fixed top-0 right-0 w-3/4 md:w-1/3 sm:w-1/2 bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        } h-full`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleDrawer}>
            <IoMdClose className="h-6 w-6 text-yellow-800" />
          </button>
        </div>

        {/* cart content with scrollable area */}

        <div className="flex-grow p-4 overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4 ">Your Cart</h2>
          {/* cart data that is scrollable */}
          <CartContent/>
        </div>

        <div className="p-4 bg-white sticky bottom-0 " >
             <button onClick={handlecheckout} className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition" >chekout</button>
             <p className="text-sm tracking-tighter text-gray-500 text-center mt-2 " >shipping ,taxes and discout code calculated at chekout</p>

        </div>



      </div>
    </>
  );
};

export default CartDrawer;
