import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import Paypal from './Paypal';
const data={
     products:[
        {
            id:1,
            name:"T-shirt",
            size:"M",
            quantity:1,
            price:15,
            image:"https://picsum.photos/200?random=1",
            color:"green"
        },
        {
            id:2,
            name:"jeans",
            size:"L",
            quantity:1,
            price:25,
            image:"https://picsum.photos/200?random=1",
            color:"green"
        },
        {
            id:3,
            name:"shirt",
            size:"M",
            quantity:1,
            price:115,
            image:"https://picsum.photos/200?random=1",
            color:"green"
        },
        {
            id:4,
            name:"T-shirt",
            size:"M",
            quantity:1,
            price:15,
            image:"https://picsum.photos/200?random=1",
            color:"green"
        },],
        totalprice:170,
}


const Checkout = () => {

     const navigate = useNavigate();

     const [shippingAddress, setShippingAddress] = useState({
          name:"",
          email:"",
          phone:"",
          address:"",
          city:"",
          state:"",
          country:"",
          zip:""
     });

     const [checkoutid, setCheckoutid] = useState(null);
   
     const handleCreateCheckout =  (e) => {
          e.preventDefault();
          const checkoutData = {
               shippingAddress,
               products:data.products,
               totalprice:data.totalprice
          }
          setCheckoutid(true);
          console.log(checkoutData);
         
     }

     const handlePaymentSuccess = (paymentData) => {
          console.log("Payment Success", paymentData);
          alert("payment success");
          navigate("/profile");
     }
      
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6">
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-2xl uppercase mb-6">checkout</h2>
        <form onSubmit={handleCreateCheckout} className="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-lg space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Shipping Address
          </h2>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              value={shippingAddress.name}
              onChange={(e) =>
                setShippingAddress({ ...shippingAddress, name: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={shippingAddress.email}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  email: e.target.value,
                })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="text"
              value={shippingAddress.phone}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  phone: e.target.value,
                })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <input
              type="text"
              value={shippingAddress.address}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  address: e.target.value,
                })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City
            </label>
            <input
              type="text"
              value={shippingAddress.city}
              onChange={(e) =>
                setShippingAddress({ ...shippingAddress, city: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              State
            </label>
            <input
              type="text"
              value={shippingAddress.state}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  state: e.target.value,
                })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Country
            </label>
            <input
              type="text"
              value={shippingAddress.country}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  country: e.target.value,
                })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
          <div className='mt-6'>
                {
                    !checkoutid?(
                         <button type="submit" className='w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition'>
                         Place Order
                         </button>
                    ):(
                         <>
                              <h3 className='text-lg mb-4'> pay with paypal</h3>
                              <Paypal amount={data.totalprice} onError={(err)=>alert("payment failed",err)}  onSuccess={handlePaymentSuccess}  />
                         </>
                    )
                }
          </div>
        </form>
      </div>

      <div>
            <h2 className="text-2xl uppercase mb-6">Order Summary</h2>
            <div className="bg-white rounded-lg p-6">
           {data.products.map((product) => (
               <div key={product.id} className="flex items-start justify-between py-4 border-b">
                 <div className="flex item-start">
                     <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-24 object-cover mr-4 rounded"
                     />
                     <div>
                    <h3>{product.name}</h3>
                    <p className="text-sm text-pink-900">
                      size: {product.size} || color:{product.color}
                    </p>
                    <div className="flex item-center mt-2">
                    
                      <span className="mx-4">{product.quantity}</span>
                    
                    </div>
                     </div>
                 </div>
     
                 <div>
                     <p className="font-medium ">${product.price.toLocaleString()}</p>
     
                     <button>
                    {/* <RiDeleteBin3Line className="h-6 w-6 mt-2 text-red-900 "/> */}
                     </button>
     
                 </div>
               </div>
           ))}
     
           <h3 className='text-lg font-semibold mt-4'>Total Price: ${data.totalprice}</h3>
     
            </div>

      </div>



    </div>
  );
}

export default Checkout