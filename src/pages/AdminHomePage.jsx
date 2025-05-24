import React from "react";

const AdminHomePage = () => {
  const orders = [
    {
      _id: 123412,
      user: {
        name: "John Doe",
      },
      totalPrice: 100,
      status: "Pending",
    },
    {
      _id: 123413,
      user: {
        name: "Jane Smith",
      },
      totalPrice: 250,
      status: "Shipped",
    },
     {
       _id: 123414,
       user: {
          name: "Alice Johnson",
       },
       totalPrice: 300,
       status: "Delivered",
     },
     {
       _id: 123415,
       user: {
          name: "Bob Brown",
       },
       totalPrice: 150,
       status: "Pending",
     },
     {
       _id: 123416,
       user: {
          name: "Charlie Davis",
       },
       totalPrice: 200,
       status: "Shipped",
     },




  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-4">Order ID</th>
              <th className="p-4">User</th>
              <th className="p-4">Total Price</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id} className="border-t">
                <td className="p-4">{order._id}</td>
                <td className="p-4">{order.user.name}</td>
                <td className="p-4">${order.totalPrice}</td>
                <td className="p-4">
                  <span
                    className={`px-2 py-1 rounded-full text-white text-sm ${
                      order.status === "Pending"
                        ? "bg-yellow-500"
                        : "bg-green-600"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminHomePage;
