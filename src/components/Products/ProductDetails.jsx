import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";
const ProductDetails = () => {
  
  const similarProducts = [
    {
      _id: 1,
      name: "T-shirt",
      price: 110,
      images: [
        { url: "https://picsum.photos/200/300?random=1", altText: "T-shirt" },
      ],
    },
    {
      _id: 2,
      name: "Hoodie",
      price: 250,
      images: [
        { url: "https://picsum.photos/200/300?random=2", altText: "Hoodie" },
      ],
    },
    {
      _id: 3,
      name: "Denim Jacket",
      price: 500,
      images: [
        {
          url: "https://picsum.photos/200/300?random=3",
          altText: "Denim Jacket",
        },
      ],
    },
    {
      _id: 4,
      name: "Sweatshirt",
      price: 220,
      images: [
        {
          url: "https://picsum.photos/200/300?random=4",
          altText: "Sweatshirt",
        },
      ],
    },
    {
      _id: 5,
      name: "Tank Top",
      price: 90,
      images: [
        { url: "https://picsum.photos/200/300?random=5", altText: "Tank Top" },
      ],
    },
    {
      _id: 6,
      name: "Polo Shirt",
      price: 130,
      images: [
        {
          url: "https://picsum.photos/200/300?random=6",
          altText: "Polo Shirt",
        },
      ],
    },
    {
      _id: 7,
      name: "Long Sleeve Tee",
      price: 150,
      images: [
        {
          url: "https://picsum.photos/200/300?random=7",
          altText: "Long Sleeve Tee",
        },
      ],
    },
    {
      _id: 8,
      name: "Graphic Tee",
      price: 140,
      images: [
        {
          url: "https://picsum.photos/200/300?random=8",
          altText: "Graphic Tee",
        },
      ],
    },
    {
      _id: 9,
      name: "Crop Top",
      price: 120,
      images: [
        { url: "https://picsum.photos/200/300?random=9", altText: "Crop Top" },
      ],
    },
    {
      _id: 10,
      name: "Henley Shirt",
      price: 160,
      images: [
        {
          url: "https://picsum.photos/200/300?random=10",
          altText: "Henley Shirt",
        },
      ],
    },
  ];
  


  const selectedproducts = {
    name: "stylish jacket",
    price: 120,
    originalprice: 150,
    description: "this is stylish product from our latest collection",
    brand: "puma",
    material: "cotton",
    color: ["red", "blue", "green"],
    size: ["s", "xs", "m", "l", "xl", "xxl"],
    images: [
      {
        url: "https://picsum.photos/200/300?random=1",
        altText: "stylish jacket",
      },
      {
        url: "https://picsum.photos/200/300?random=2",
        altText: "stylish jacket",
      },
      {
        url: "https://picsum.photos/200/300?random=3",
        altText: "stylish jacket",
      },
    ],
  };

  const addToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("please select size and color", { duration: 1000 });
      return;
    }
    setIsButtonDisabled(true);

    setTimeout(() => {
      toast.success("product added to cart");
      setIsButtonDisabled(false);
    }, 3000);
  };

  const [mainImage, setMainImage] = useState(selectedproducts?.images[0].url);

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  //  useEffect(()=>{
  //   if(selectedproducts?.images?.length>0){
  //     setMainImage(selectedproducts?.images[0]?.url);
  //   }
  //  },[selectedproducts]);

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedproducts.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText}
                className={`w-20 h-20  rounded-lg cursor-pointer border object-cover ${
                  mainImage === image.url
                    ? "border-green-700 border-2"
                    : "border-gray-400"
                } `}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>

          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={mainImage}
                alt={selectedproducts.images[0].altText}
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          </div>

          <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
            {selectedproducts.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText}
                className={`w-20 h-20  rounded-lg cursor-pointer border-4 object-cover  ${
                  mainImage === image.url
                    ? "border-green-700 border-2"
                    : "border-gray-400"
                } `}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>

          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {selectedproducts.name}
            </h1>
            <div className="flex items-center space-x-2 text-lg text-gray-600 mb-1">
              <span className="line-through flex items-center">
                <LiaRupeeSignSolid />
                {selectedproducts.originalprice &&
                  `${selectedproducts.originalprice}`}
              </span>
              <span className="flex items-center text-black font-semibold">
                <LiaRupeeSignSolid />
                {selectedproducts.price && `${selectedproducts.price}`}
              </span>
            </div>

            <p className="text-blue-400 mb-4">{selectedproducts.description}</p>

            <div className="mb-4">
              <p className="text-gray-900">color:</p>
              <div className="flex gap-2 mt-2">
                {selectedproducts.color.map((color, index) => (
                  <button
                    key={index}
                    className={`inline-block w-8 h-8 rounded-full mr-2 ${
                      selectedColor === color ? "border-black border-3" : ""
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => {
                      setSelectedColor(color);
                      setIsButtonDisabled(false);
                    }}
                  ></button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <p className="text-gray-900">size:</p>
              <div className="flex gap-2 mt-2">
                {selectedproducts.size.map((size, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded border ${
                      selectedSize === size
                        ? "border-black text-green-800 bg-amber-200 border-3"
                        : "border-gray-400"
                    }`}
                    onClick={() => {
                      setSelectedSize(size);
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <p className="text-red-900">Quantity:</p>
              <div className="flex item-center space-x-4 mt-2">
                <button
                  className="border  px-2 py-1 text-lg rounded bg-green-400 font-medium"
                  onClick={() => {
                    if (quantity > 1) {
                      setQuantity(quantity - 1);
                    }
                  }}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  className="border  px-2 py-1 text-lg rounded bg-green-400 font-medium"
                  onClick={() => {
                    if (quantity < 10) {
                      setQuantity(quantity + 1);
                    }
                  }}
                >
                  +
                </button>
              </div>
            </div>

            <button
              disabled={isButtonDisabled}
              className={` text-white rounded w-full mb-4  ${
                isButtonDisabled ? "bg-red-800" : "bg-black"
              }`}
              onClick={() => {
                addToCart();
              }}
            >
              {isButtonDisabled ? "adding..." : "add to cart"}
            </button>

            <div className="mt-10 text-green-600">
              <h3 className="text-xl font-bold mb-4">characteristics:</h3>

              <table className="w-full text-left text-sm text-gray-500">
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-2 font-medium text-gray-900">
                      Brand
                    </td>
                    <td className="px-4 py-2">{selectedproducts.brand}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2 font-medium text-gray-900">
                      Material
                    </td>
                    <td className="px-4 py-2">{selectedproducts.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-20">
            <h2 className="text-2xl text-amber-300 text-center font-medium mb-4" >
              you may also like this products 
            </h2>
           <ProductGrid  similarProducts={similarProducts} />
        </div>



      </div>
    </div>
  );
};

export default ProductDetails;
