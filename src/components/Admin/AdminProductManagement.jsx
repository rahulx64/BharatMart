import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdminProductManagement = () => {
  const [products, setProducts] = useState([
    {
      _id: 123878,
      name: "Shirt",
      price: 10,
      sku: "123456789",
    },
    {
      _id: 678920,
      name: "Jeans",
      price: 25,
      sku: "987654321",
    },
  ]);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirmDelete) {
      setProducts(products.filter((product) => product._id !== id));
    }
  };



  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Product Management</h2>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Product Name</th>
            <th className="border px-4 py-2">Price ($)</th>
            <th className="border px-4 py-2">SKU</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td className="border px-4 py-2">{product.name}</td>
              <td className="border px-4 py-2">{product.price}</td>
              <td className="border px-4 py-2">{product.sku}</td>
              <td className="border px-4 py-2 space-x-2">
                <Link
                  to={`/admin/products/${product._id}/edit`}
                  className="text-blue-600 underline"
             
                >
                  View details of product
                </Link>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="text-red-600 underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {products.length === 0 && (
            <tr>
              <td colSpan="4" className="text-center p-4">
                No products available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProductManagement;
