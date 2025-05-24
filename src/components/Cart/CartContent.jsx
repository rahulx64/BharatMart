import React from "react";
import { RiDeleteBin3Line } from "react-icons/ri";

const CartContent = () => {
 const cartProducts = [
    {
      productId: 1,
      name: "T-shirt",
      size: "M",
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/200?random=1",
      color: "green",
    },
    {
      productId: 2,
      name: "jeans",
      size: "L",
      quantity: 1,
      price: 25,
      image: "https://picsum.photos/200?random=1",
      color: "green",
    },
    {
      productId: 3,
      name: "shirt",
      size: "M",
      quantity: 1,
      price: 115,
      image: "https://picsum.photos/200?random=1",
      color: "green",
    },
    {
      productId: 4,
      name: "T-shirt",
      size: "M",
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/200?random=1",
      color: "green",
    },
  ];
  return (
    <div>
      {cartProducts.map((product, index) => (
        <div
          key={index}
          className="flex items-start justify-between py-4 border-b"
        >
          <div className="flex item-start">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-24 object-cover mr-4 rounded"
            />
            <div>
              <h3>{product.name}</h3>
              <p className="text-sm text-gray-500">
                size: {product.size} || color:{product.color}
              </p>
              <div className="flex item-center mt-2">
                <button className="border rounded px-2 py-1 text-xl font-medium">
                  -
                </button>
                <span className="mx-4">{product.quantity}</span>
                <button className="border rounded px-2 py-1 text-xl font-medium">
                  +
                </button>
              </div>
            </div>
          </div>

          <div>
             <p className="font-medium ">${product.price.toLocaleString()}</p>

             <button>
               <RiDeleteBin3Line className="h-6 w-6 mt-2 text-red-900 "/>
             </button>

          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContent;
