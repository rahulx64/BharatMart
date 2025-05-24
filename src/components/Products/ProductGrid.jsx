import React from 'react'

const ProductGrid = ({ similarProducts }) => {
  return( <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
       {
          similarProducts.map((product, index) => (
            <div key={index} className='border p-4 rounded-lg'>
              <img src={product.images[0].url} alt={product.name} className='w-full h-48 object-cover mb-4 rounded' />
              <h3 className='text-lg font-semibold'>{product.name}</h3>
              <p className='text-purple-500'>Price: ${product.price}</p>
              <button className='mt-2 bg-blue-500 text-white px-4 py-2 rounded'>Add to Cart</button>
            </div>
          ))
       }
      
  </div>);
};

export default ProductGrid