import React from "react";
import Hero from "../components/Layout/Hero";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";
import ProductGrid from "../components/Products/ProductGrid";
import FeaturedCollection from "../components/Products/FeaturedCollection";
import FeaturedSection from "../components/Products/FeaturedSection";
const Home = () => {
   
  const similarProducts= [
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
        { url: "https://picsum.photos/200/300?random=12", altText: "Crop Top" },
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
        { url: "https://picsum.photos/200/300?random=16", altText: "Blazer" },
      ],
    },
  ];
  
   


  return (
    <>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />

      <h2 className="text-3xl text-center text-lime-500 font-bold mb-4">Best product</h2>

      <ProductDetails />

      <div className="container mx-auto">
             <h2 className="text-3xl text-center font-bold mb-4">Top Wears for Women</h2>
             <ProductGrid similarProducts={similarProducts} />

      </div>

      <FeaturedCollection />
      <FeaturedSection/>


    </>
  );
};

export default Home;
