import React from "react";
import { HiArrowPathRoundedSquare, HiOutlineCreditCard, HiShoppingBag } from "react-icons/hi2";

const FeaturedSection = () => {
  return (
    <div className="py-16 px-4 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <HiShoppingBag className="text-xl" />
          </div>
          <h4 className="mb-2 uppercase">free internationl shipping</h4>
          <p className="text-gray-600 text-sm">on all orders over $100</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <HiArrowPathRoundedSquare className="text-xl" />
          </div>
          <h4 className="mb-2 uppercase">45 days return</h4>
          <p className="text-gray-600 text-sm">money back gurranted</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <HiOutlineCreditCard className="text-xl" />
          </div>
          <h4 className="mb-2 uppercase">secure checkout</h4>
          <p className="text-gray-600 text-sm">100% secured checkout process</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
