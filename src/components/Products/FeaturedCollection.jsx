import React from "react";
import { Link } from "react-router-dom";
import featured from "../../assets/featured.webp";

const FeaturedCollection = () => {
  return (
    <section className="py-16 px-4 lg:px-0 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center rounded-3xl shadow-xl overflow-hidden bg-white">
        {/* Text Section */}
        <div className="lg:w-1/2 p-8 lg:p-12 text-center lg:text-left">
          <h3 className="text-sm uppercase text-pink-500 font-semibold mb-2 tracking-widest">
            Comfortable & Stylish
          </h3>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Explore Our Featured Collection
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Discover the latest trends and styles in our exclusive collection.
            Shop now and elevate your wardrobe with our handpicked,
            fashion-forward pieces.
          </p>
          <Link
            to="/collections/all"
            className="inline-block bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:bg-pink-800 shadow-md"
          >
            Shop Now
          </Link>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2">
          <img
            src={featured}
            alt="Featured Collection"
            className="w-full h-full object-cover border-4 border-pink-300"
              
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
