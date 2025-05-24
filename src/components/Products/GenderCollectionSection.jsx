import React from "react";
import mencollectionimage from "../../assets/mens-collection.webp";
import womencollectionimage from "../../assets/womens-collection.webp";
import { Link } from "react-router-dom";

const GenderCollectionSection = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        {/* Women Collection */}
        <div className="relative flex-1">
          <img
            src={womencollectionimage}
            className="w-full h-[700px] object-cover"
            alt="Women Collection"
          />
          <div className="absolute bottom-8 left-8 bg-white/80 p-4 shadow-lg">
            <h2 className="text-2xl font-bold text-blue-900 mb-3">
              Women Collection
            </h2>
            <Link
              to="/collections/all?gender=Women"
              className="text-orange-700 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Men Collection */}
        <div className="relative flex-1">
          <img
            src={mencollectionimage}
            className="w-full h-[700px] object-cover"
            alt="Men Collection"
          />
          <div className="absolute bottom-8 left-8 bg-white/80 p-4 shadow-lg">
            <h2 className="text-2xl font-bold text-blue-900 mb-3">
              Men Collection
            </h2>
            <Link
              to="/collections/all?gender=Men"
              className="text-orange-700 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenderCollectionSection;
