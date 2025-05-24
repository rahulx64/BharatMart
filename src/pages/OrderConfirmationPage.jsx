import React from 'react'

const chekoutData = {

     _id: 1,
     createdAt:new Date(),
     checkoutItems:[
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
          }
     ],
     shippingAdress:{
          address:"patna bihar",
          city:"patna",
          state:"bihar",
          country:"india",
          zip:"800001"
     }
};

const OrderConfirmationPage = () => {
  return (
    <div className='max-w-4xl mx-auto p-6 bg-white' >
     <h1 className='text-4xl font-bold text-center text-emerald-700 mb-8' >thank you for your order we soon reach to you bhai</h1>

     {
          chekoutData && <div className='p-6 rounded-lg  border'>
               <h2 className='text-2xl font-bold mb-4' >Order Confirmation</h2>
               <p className='text-lg mb-2' >Order ID: {chekoutData._id}</p>
               <p className='text-lg mb-2' >Order Date: {chekoutData.createdAt.toLocaleDateString()}</p>
               <h3 className='text-xl font-bold mb-4' >Shipping Address</h3>
               <p className='text-lg mb-2' >{chekoutData.shippingAdress.address}</p>
               <p className='text-lg mb-2' >{chekoutData.shippingAdress.city}</p>
               <p className='text-lg mb-2' >{chekoutData.shippingAdress.state}</p>
               <p className='text-lg mb-2' >{chekoutData.shippingAdress.country}</p>
               <p className='text-lg mb-2' >{chekoutData.shippingAdress.zip}</p>
               <h3 className='text-xl font-bold mb-4' >Order Items</h3>
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' >
                    {
                         chekoutData.checkoutItems.map((item) => (
                              <div key={item.id} className='border p-4 rounded-lg' >
                                   <img src={item.image} alt={item.name} className='w-full h-48 object-cover mb-4' />
                                   <h4 className='text-lg font-bold mb-2' >{item.name}</h4>
                                   <p className='text-lg mb-2' >Size: {item.size}</p>
                                   <p className='text-lg mb-2' >Color: {item.color}</p>
                                   <p className='text-lg mb-2' >Quantity: {item.quantity}</p>
                                   <p className='text-lg mb-2' >Price: ${item.price}</p>
                              </div>
                         ))
                    }

                    </div>



                </div>
     }

    </div>
  )
}

export default OrderConfirmationPage