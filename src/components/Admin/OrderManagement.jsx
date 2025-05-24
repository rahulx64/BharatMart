import React, { useState } from "react";

const OrderManagement = () => {
  const [orders, setOrders] = useState([
    {
      _id: 123233,
      user: {
        name: "John Doe",
      },
      totalprice: 100,
      status: "processing",
    },
    {
      _id: 456789,
      user: {
        name: "Alice Smith",
      },
      totalprice: 250,
      status: "pending",
    },
  ]);

  const [selectedStatuses, setSelectedStatuses] = useState(
    orders.map((order) => order.status)
  );

  const handleSelectChange = (index, newStatus) => {
    const updated = [...selectedStatuses];
    updated[index] = newStatus;
    setSelectedStatuses(updated);
  };

  const handleStatusUpdate = (index) => {
    const updatedOrders = [...orders];
    updatedOrders[index].status = selectedStatuses[index];
    setOrders(updatedOrders);
  };

  return (
    <div className="max-w-6xl mx-auto p-8 mt-10 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Order Management
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-200 rounded-md">
          <thead className="bg-blue-100">
            <tr>
              <th className="text-left py-3 px-6 font-semibold text-gray-700">
                Order ID
              </th>
              <th className="text-left py-3 px-6 font-semibold text-gray-700">
                Customer
              </th>
              <th className="text-left py-3 px-6 font-semibold text-gray-700">
                Total Price
              </th>
              <th className="text-left py-3 px-6 font-semibold text-gray-700">
                Status
              </th>
              <th className="text-left py-3 px-6 font-semibold text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr
                key={order._id}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="py-3 px-6 text-gray-800">{order._id}</td>
                <td className="py-3 px-6 text-gray-800">{order.user.name}</td>
                <td className="py-3 px-6 text-gray-800">${order.totalprice}</td>
                <td className="py-3 px-6 text-gray-800 capitalize">
                  {order.status}
                </td>
                <td className="py-3 px-6 flex gap-2 items-center">
                  <select
                    value={selectedStatuses[index]}
                    onChange={(e) => handleSelectChange(index, e.target.value)}
                    className="bg-white border border-gray-300 text-gray-700 py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="pending">Pending</option>
                    <option value="processing">Processing</option>
                    <option value="delivered">Delivered</option>
                  </select>
                  <button
                    onClick={() => handleStatusUpdate(index)}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderManagement;
