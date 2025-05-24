import React, { useState, useEffect, useRef } from 'react';
import { FaFilter } from 'react-icons/fa';
import FilterSidebar from '../components/Products/FilterSidebar';
import SortOption from '../components/Products/SortOption';

import ProductGridAll from '../components/Products/ProductGridAll';

const CollectionPage = () => {
  const [collection, setCollection] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // only run once on mount

  useEffect(() => {
    const fetchData = () => {
      const data1 = [
        {
          _id: 11,
          name: "Floral Dress",
          price: 350,
          images: [
            {
              url: "https://picsum.photos/200/300?random=11",
              altText: "Floral Dress",
            },
          ],
        },
        {
          _id: 12,
          name: "Crop Top",
          price: 150,
          images: [
            {
              url: "https://picsum.photos/200/300?random=12",
              altText: "Crop Top",
            },
          ],
        },
        {
          _id: 13,
          name: "High-Waist Jeans",
          price: 400,
          images: [
            {
              url: "https://picsum.photos/200/300?random=13",
              altText: "High-Waist Jeans",
            },
          ],
        },
        {
          _id: 14,
          name: "Off-Shoulder Top",
          price: 180,
          images: [
            {
              url: "https://picsum.photos/200/300?random=14",
              altText: "Off-Shoulder Top",
            },
          ],
        },
        {
          _id: 15,
          name: "Maxi Skirt",
          price: 270,
          images: [
            {
              url: "https://picsum.photos/200/300?random=15",
              altText: "Maxi Skirt",
            },
          ],
        },
        {
          _id: 16,
          name: "Blazer",
          price: 550,
          images: [
            {
              url: "https://picsum.photos/200/300?random=16",
              altText: "Blazer",
            },
          ],
        },
      ];

      setCollection(data1);
    };

    setTimeout(fetchData, 1000); // simulate API call
  }, []);

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Toggle button for mobile */}
      <button
        className="lg:hidden border p-2 flex justify-center items-center"
        onClick={toggleSidebar}
      >
        <FaFilter className="mr-2" />
        Filter
      </button>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed inset-y-0 z-50 left-0 w-64 bg-green-300 overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <FilterSidebar />
      </div>
      <div className='flex-grow p-4' >
          <h2 className='text-2xl uppercase mb-4'>all collections</h2>
          <SortOption/>

        
          <ProductGridAll collection={collection} />
          




      </div>
      
    </div>
  );
};

export default CollectionPage;
