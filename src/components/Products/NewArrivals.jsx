import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaLink } from "react-icons/fa";

const NewArrivals = () => {
  const [scrollX, setScrollX] = useState(0);
  const scrollAmount = 300;

  const scrollLeft = () => {
    setScrollX((prev) => Math.min(prev + scrollAmount, 0));
  };

  const scrollRight = () => {
    setScrollX((prev) => prev - scrollAmount);
  };

  const newarrivals = [
    {
      _id: "1",
      name: "t-shirt",
      price: 110,
      images: [
        { url: "https://picsum.photos/200/300?random=1", altText: "t-shirt" },
      ],
    },
    {
      _id: "2",
      name: "t-shirt",
      price: 110,
      images: [
        { url: "https://picsum.photos/200/300?random=2", altText: "t-shirt" },
      ],
    },
    {
      _id: "3",
      name: "t-shirt",
      price: 110,
      images: [
        { url: "https://picsum.photos/200/300?random=3", altText: "t-shirt" },
      ],
    },
    {
      _id: "4",
      name: "t-shirt",
      price: 110,
      images: [
        { url: "https://picsum.photos/200/300?random=4", altText: "t-shirt" },
      ],
    },
    {
      _id: "5",
      name: "t-shirt",
      price: 110,
      images: [
        { url: "https://picsum.photos/200/300?random=5", altText: "t-shirt" },
      ],
    },
    {
      _id: "6",
      name: "t-shirt",
      price: 110,
      images: [
        { url: "https://picsum.photos/200/300?random=6", altText: "t-shirt" },
      ],
    },
    {
      _id: "7",
      name: "t-shirt",
      price: 110,
      images: [
        { url: "https://picsum.photos/200/300?random=7", altText: "t-shirt" },
      ],
    },
    {
      _id: "8",
      name: "t-shirt",
      price: 110,
      images: [
        { url: "https://picsum.photos/200/300?random=8", altText: "t-shirt" },
      ],
    },
  ];

  return (
    <section>
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold text-lime-500 mb-4">
          Explore New Products
        </h2>
        <p className="text-lg text-black mb-8">
          Discover the latest additions to our collection. From trendy apparel
          to stylish accessories, find your perfect match.
        </p>

        <div className="absolute right-4 top-0 flex space-x-2">
          <button
            onClick={scrollLeft}
            className="p-2 rounded border bg-white text-red-600"
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          <button
            onClick={scrollRight}
            className="p-2 rounded border bg-white text-red-600"
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden px-4 py-2">
        <div
          className="flex space-x-6 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${scrollX}px)` }}
        >
          {newarrivals.map((product) => (
            <div key={product._id} className="flex-shrink-0 w-48">
              <img
                src={product.images[0].url}
                alt={product.images[0].altText}
                className="w-48 h-48 object-cover rounded-lg shadow-lg"
              />
              <div className="flex items-center justify-between mt-2 space-x-2">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-green-600">${product.price}</p>
                <Link to={`/product/${product._id}`}>
                  <FaLink className="h-4 w-4 text-green-600" />
                </Link>
              </div>
            </div>
              

          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
