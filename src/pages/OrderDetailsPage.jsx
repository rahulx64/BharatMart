import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const OrderDetailsPage = () => {
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    // Simulating API data fetch with mock data
    const mockdata = {
      _id: id,
      createdAt: new Date(),
      ispaid: true,
      isdeliverd: false,
      paymentMethod: "paypal",
      shippingmethod: "fedex",
      shippingAddress: {
        address: "123 street",
        city: "newyork",
        postalcode: "10001",
        country: "USA",
      },
      orderitems: [
        {
          product_id: "1",
          name: "product 1",
          price: 100,
          quantity: 2,
          image: "https://picsum.photos/200/300?random=1",
        },
        {
          product_id: "2",
          name: "product 2",
          price: 200,
          quantity: 1,
          image: "https://picsum.photos/200/300?random=2",
        },
      ],
    };

    setOrderDetails(mockdata);
  }, [id]);

  const calculateTotal = () => {
    return orderDetails.orderitems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h1 className="text-3xl font-bold mb-4">Order Details</h1>

      {orderDetails ? (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Order ID: {orderDetails._id}
          </h2>
          <p className="text-lg mb-2">
            Order Date: {new Date(orderDetails.createdAt).toLocaleString()}
          </p>
          <p className="text-lg mb-2">
            Payment Method: {orderDetails.paymentMethod}
          </p>
          <p className="text-lg mb-2">
            Shipping Method: {orderDetails.shippingmethod}
          </p>
          <p className="text-lg mb-2">
            Payment Status:{" "}
            <span
              className={
                orderDetails.ispaid ? "text-green-600" : "text-red-600"
              }
            >
              {orderDetails.ispaid ? "Paid" : "Not Paid"}
            </span>
          </p>
          <p className="text-lg mb-4">
            Delivery Status:{" "}
            <span
              className={
                orderDetails.isdeliverd ? "text-green-600" : "text-red-600"
              }
            >
              {orderDetails.isdeliverd ? "Delivered" : "Not Delivered"}
            </span>
          </p>

          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Shipping Address:</h3>
            <ul className="list-disc pl-5">
              <li>{orderDetails.shippingAddress.address}</li>
              <li>{orderDetails.shippingAddress.city}</li>
              <li>{orderDetails.shippingAddress.postalcode}</li>
              <li>{orderDetails.shippingAddress.country}</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Order Items:</h3>
            <ul className="divide-y">
              {orderDetails.orderitems.map((item) => (
                <li key={item.product_id} className="py-2 flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 mr-4 rounded object-cover"
                  />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p>
                      ${item.price} x {item.quantity} = $
                      {item.price * item.quantity}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-right mt-6">
            <p className="text-xl font-bold">Total: ${calculateTotal()}</p>
          </div>

          <Link to="/my-orders" className="text-blue-500 hover:underline" >Back to My order </Link>


        </div>
        


      ) : (
        <p>Loading order details...</p>
      )}
    </div>
  );
};

export default OrderDetailsPage;
