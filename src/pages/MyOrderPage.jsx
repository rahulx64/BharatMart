import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const MyOrderPage = () => {
        const navigate = useNavigate();
     const [orders,setOrders] = useState([]);

     useEffect(() => {
           setTimeout(() => {
               const data = [
                 {
                   _id: "12345678",
                   createdAt: new Date().toISOString(),
                   shippingAdress: {
                     city: "New Delhi",
                     state: "Delhi",
                     country: "India",
                   },
                   orderItems: [
                     {
                       name: "T-shirt",
                       size: "M",
                       image: "https://picsum.photos/200/300?random=1",
                       price: 100,
                     },
                   ],
                   totalPrice: 100,
                   ispaid: true,
                 },
                 {
                   _id: "23456789",
                   createdAt: new Date().toISOString(),
                   shippingAdress: {
                     city: "Mumbai",
                     state: "Maharashtra",
                     country: "India",
                   },
                   orderItems: [
                     {
                       name: "Jeans",
                       size: "L",
                       image: "https://picsum.photos/200/300?random=2",
                       price: 150,
                     },
                   ],
                   totalPrice: 150,
                   ispaid: false,
                 },
                 {
                   _id: "34567890",
                   createdAt: new Date().toISOString(),
                   shippingAdress: {
                     city: "Bangalore",
                     state: "Karnataka",
                     country: "India",
                   },
                   orderItems: [
                     {
                       name: "Hoodie",
                       size: "S",
                       image: "https://picsum.photos/200/300?random=3",
                       price: 200,
                     },
                   ],
                   totalPrice: 200,
                   ispaid: true,
                 },
                 {
                   _id: "45678901",
                   createdAt: new Date().toISOString(),
                   shippingAdress: {
                     city: "Kolkata",
                     state: "West Bengal",
                     country: "India",
                   },
                   orderItems: [
                     {
                       name: "Cap",
                       size: "Free",
                       image: "https://picsum.photos/200/300?random=4",
                       price: 50,
                     },
                   ],
                   totalPrice: 50,
                   ispaid: false,
                 },
               ];

               setOrders(data);
                  
           }, 2000);

     },[]);

     const handleOrderId = (id) => {
          console.log(id);
          navigate(`/order/${id}`);
     }


  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-6">My Orders</h2>

      <div className="relative shadow-md sm:rounded-lg overflow-hidden">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="py-3 px-6 " scope="col">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Order ID
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Shipping Address
              </th>
              <th scope="col" className="px-6 py-3">
                items
              </th>
              <th scope="col" className="px-6 py-3">
                Total Price
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr
                key={order._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4 h-6 w-auto">
                  <img
                    src={order.orderItems[0].image}
                    alt={order.orderItems[0].name}
                    className="w-20 h-24 object-cover rounded"
                  />
                </td>
                <td
                  onClick={() => {
                    handleOrderId(order._id);
                  }}
                  className="px-6 py-4 hover:cursor-pointer hover:text-lime-500"
                >
                  #{order._id}
                </td>
                <td className="px-6 py-4">
                  {new Date(order.createdAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4">{`${order.shippingAdress.city}, ${order.shippingAdress.state}, ${order.shippingAdress.country}`}</td>

                <td className="px-6 py-4">{order.orderItems[0].name}</td>
                <td className="px-6 py-4">${order.totalPrice}</td>
                <td
                  className={`px-6 py-4 ${
                    order.ispaid ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {order.ispaid ? "Paid" : "Pending"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyOrderPage