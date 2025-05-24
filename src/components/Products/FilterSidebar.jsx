import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { BsCircleFill } from "react-icons/bs";

const FilterSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [filter, setFilter] = useState({
    category: "",
    gender: "",
    size: [],
    material: [],
    brand: [],
    colors: [],
    minprice: 0,
    maxprice: 100,
  });

  const [priceRange, setPriceRange] = useState([0, 100]);

  const categories = ["Top wear", "Bottom Wear"];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const materials = [
    "Cotton",
    "Polyester",
    "Wool",
    "Silk",
    "Linen",
    "Denim",
    "Leather",
  ];
  const brands = [
    "Nike",
    "Adidas",
    "Puma",
    "Reebok",
    "Under Armour",
    "New Balance",
    "Asics",
  ];
  const genders = ["men", "women"];
  const colors = [
    "Red",
    "Blue",
    "Green",
    "Black",
    "White",
    "Yellow",
    "Pink",
    "Purple",
    "Orange",
    "Brown",
    "Gray",
    "Cyan",
    "Magenta",
  ];

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);
    setFilter({
      category: params.category || "",
      gender: params.gender || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      colors: params.colors ? params.colors.split(",") : [],
      minprice: Number(params.minprice || 0),
      maxprice: Number(params.maxprice || 100),
    });
    setPriceRange([
      Number(params.minprice || 0),
      Number(params.maxprice || 100),
    ]);
  }, [searchParams]);

  const updateFilters = (key, value) => {
    let updatedFilter = { ...filter };

    if (Array.isArray(updatedFilter[key])) {
      const exists = updatedFilter[key].includes(value);
      updatedFilter[key] = exists
        ? updatedFilter[key].filter((v) => v !== value)
        : [...updatedFilter[key], value];
    } else {
      updatedFilter[key] = value;
    }

    // setFilter(updatedFilter);

    const query = {
      ...updatedFilter,
      size: updatedFilter.size.join(","),
      material: updatedFilter.material.join(","),
      brand: updatedFilter.brand.join(","),
      colors: updatedFilter.colors.join(","),
    };
    setSearchParams(query);
  };

  const colorMap = {
    Red: "bg-red-400",
    Blue: "bg-blue-400",
    Green: "bg-green-400",
    Black: "bg-black",
    White: "bg-white",
    Yellow: "bg-yellow-400",
    Pink: "bg-pink-400",
    Purple: "bg-purple-400",
    Orange: "bg-orange-400",
    Brown: "bg-amber-900",
    Gray: "bg-gray-400",
    Cyan: "bg-cyan-400",
    Magenta: "bg-fuchsia-400",
  };
   

  return (
    <div className="p-4">
      <h3 className="text-xl font-medium text-gray-800 mb-4">Filter</h3>

      {/* Category */}
      <div className="mb-6">
        <label className="block text-black font-medium mb-2">Category</label>
        {categories.map((category) => (
          <div key={category} className="flex items-center mb-2">
            <input
              type="radio"
              name="category"
              id={category}
              value={category}
              checked={filter.category === category}
              onChange={() => updateFilters("category", category)}
              className="mr-2"
            />
            <label htmlFor={category} className="text-gray-700">
              {category}
            </label>
          </div>
        ))}
      </div>

      {/* Gender */}
      <div className="mb-6">
        <label className="block text-black font-medium mb-2">Gender</label>
        {genders.map((g) => (
          <div key={g} className="flex items-center mb-2">
            <input
              type="radio"
              name="gender"
              id={g}
              value={g}
              checked={filter.gender === g}
              onChange={() => updateFilters("gender", g)}
              className="mr-2"
            />
            <label htmlFor={g} className="text-gray-700">
              {g}
            </label>
          </div>
        ))}
      </div>

      {/* Size */}
      <div className="mb-6">
        <label className="block text-black font-medium mb-2">Size</label>
        {sizes.map((size) => (
          <div key={size} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={size}
              value={size}
              checked={filter.size.includes(size)}
              onChange={() => updateFilters("size", size)}
              className="mr-2"
            />
            <label htmlFor={size} className="text-gray-700">
              {size}
            </label>
          </div>
        ))}
      </div>

      {/* Material */}
      <div className="mb-6">
        <label className="block text-black font-medium mb-2">Material</label>
        {materials.map((mat) => (
          <div key={mat} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={mat}
              value={mat}
              checked={filter.material.includes(mat)}
              onChange={() => updateFilters("material", mat)}
              className="mr-2"
            />
            <label htmlFor={mat} className="text-gray-700">
              {mat}
            </label>
          </div>
        ))}
      </div>

      {/* Brand */}
      <div className="mb-6">
        <label className="block text-black font-medium mb-2">Brand</label>
        {brands.map((brand) => (
          <div key={brand} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={brand}
              value={brand}
              checked={filter.brand.includes(brand)}
              onChange={() => updateFilters("brand", brand)}
              className="mr-2"
            />
            <label htmlFor={brand} className="text-gray-700">
              {brand}
            </label>
          </div>
        ))}
      </div>

      {/* Colors */}
      <div className="mb-6">
        <label className="block text-black font-medium mb-2">Colors</label>
        {colors.map((color) => (
          <div key={color} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={color}
              value={color}
              checked={filter.colors.includes(color)}
              onChange={() => updateFilters("colors", color)}
              className="mr-2"
            />
            <label
              htmlFor={color}
              className={` inline-block cursor-pointer border border-gray-400 ${colorMap[color]}`}
            >{color}</label>
          </div>
        ))}
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <label className="block text-black font-medium mb-2">
          Price Range
        </label>
        <div className="flex space-x-2">
          <input
            type="number"
            value={priceRange[0]}
            min={0}
            onChange={(e) => {
              const newMin = Number(e.target.value);
              setPriceRange([newMin, priceRange[1]]);
              updateFilters("minprice", newMin);
            }}
            className="w-1/2 border rounded px-2 py-1"
          />
          <input
            type="number"
            value={priceRange[1]}
            max={10000}
            onChange={(e) => {
              const newMax = Number(e.target.value);
              setPriceRange([priceRange[0], newMax]);
              updateFilters("maxprice", newMax);
            }}
            className="w-1/2 border rounded px-2 py-1"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
