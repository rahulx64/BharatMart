import React from "react";
import rahul from "../../assets/rabbit-hero.webp";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative w-full h-[400px] md:h-[600px] lg:h-[750px]">
      {/* Background Image */}
      <img src={rahul} alt="hero" className="w-full h-full object-cover" />

      {/* Transparent Overlay */}
      <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
        {/* Content */}
        <div className="text-center text-white p-6">
          <h1 className="text-4xl md:text-7xl font-bold uppercase mb-4">
            Vacation <br /> Bharat Mart
          </h1>

          <p className="text-base md:text-lg mb-6">
            Explore our products with fast shipping
          </p>

          <Link
            to="#"
            className="bg-white text-pink-700 px-6 py-2 rounded-sm text-lg font-semibold"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
