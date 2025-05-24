import React, { useState } from "react";
import { useParams } from "react-router-dom";

const AdminProductDescription = () => {
  const [productData, setProductData] = useState({
    name: "",
    descriptions: "",
    price: 0,
    countInStock: 0,
    sku: "",
    category: "",
    brand: "",
    size: [],
    colors: [],
    collections: "",
    material: "",
    gender: "",
    images: [{ url: "https://dog.com" }, { url: "https://dog.com" }],
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setProductData((previousdata) => ({
      ...previousdata,
      [name]: value,
    }));
  };

  const handlesubmit=(e)=>{
     e.preventDefault();
     console.log("Product Data", productData);
     

  }

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white shadow-xl rounded-lg mt-8">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Edit Product</h2>
      <form  onSubmit={handlesubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Product Name */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handlechange}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold mb-2">
            Description
          </label>
          <textarea
            name="descriptions"
            value={productData.descriptions}
            onChange={handlechange}
            className="w-full border border-gray-300 rounded-md p-3 h-28 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-semibold mb-2">Price ($)</label>
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handlechange}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Stock Count */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Count In Stock
          </label>
          <input
            type="number"
            name="countInStock"
            value={productData.countInStock}
            onChange={handlechange}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* SKU */}
        <div>
          <label className="block text-sm font-semibold mb-2">SKU</label>
          <input
            type="text"
            name="sku"
            value={productData.sku}
            onChange={handlechange}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-semibold mb-2">Category</label>
          <input
            type="text"
            name="category"
            value={productData.category}
            onChange={handlechange}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Brand */}
        <div>
          <label className="block text-sm font-semibold mb-2">Brand</label>
          <input
            type="text"
            name="brand"
            value={productData.brand}
            onChange={handlechange}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Size */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Size (comma-separated)
          </label>
          <input
            type="text"
            name="size"
            value={productData.size}
            onChange={(e) =>
              setProductData({
                ...productData,
                size: e.target.value.split(","),
              })
            }
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Colors */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Colors (comma-separated)
          </label>
          <input
            type="text"
            name="colors"
            value={productData.colors}
            onChange={(e) =>
              setProductData({
                ...productData,
                colors: e.target.value.split(","),
              })
            }
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Collections */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Collections
          </label>
          <input
            type="text"
            name="collections"
            value={productData.collections}
            onChange={handlechange}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Material */}
        <div>
          <label className="block text-sm font-semibold mb-2">Material</label>
          <input
            type="text"
            name="material"
            value={productData.material}
            onChange={handlechange}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm font-semibold mb-2">Gender</label>
          <select
            name="gender"
            value={productData.gender}
            onChange={handlechange}
            className="w-full border border-gray-300 rounded-md p-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Gender</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Unisex">Unisex</option>
          </select>
        </div>

        {/* Images */}
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold mb-2">Image URLs</label>
          {productData.images.map((img, index) => (
            <input
              key={index}
              type="text"
              value={img.url}
              onChange={(e) => {
                const updatedImages = [...productData.images];
                updatedImages[index].url = e.target.value;
                setProductData({ ...productData, images: updatedImages });
              }}
              className="w-full mb-2 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ))}
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 text-right mt-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-all duration-200"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminProductDescription;
