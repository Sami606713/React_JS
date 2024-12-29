import React from 'react';

export function Slider({products }) {
  return (
    <section className="bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products?.map((product) => (
            <div
              key={product.id}
              className="bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="relative">
                <img
                  alt={product.text}
                  className="h-full w-full object-cover"
                  src={product.img_url}
                  
                />
              </div>
              <div className="p-4">
                <h3 className="text-gray-900 font-medium text-lg mb-2">
                  {product.text}
                </h3>
                <p className="text-gray-600">DB:Studio</p>
                <div className="flex flex-wrap items-center text-sm text-gray-600 gap-4">
                  <div>
                    <span className="font-medium">Rent: </span>
                    {product.rent_price}
                  </div>
                  <div>
                    <span className="font-medium">Buy: </span>
                    {product.sale_price}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
}

export function Pic_Slider({ text, products }) {
  return (
    <section className="bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products?.map((product) => (
            <div
              key={product.id}
              className="bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="relative">
                <img
                  alt={product.text}
                  className="h-48 w-full object-cover object-center"
                  src={product.img_url}
                />
              </div>
            </div>
          ))}
        </div>
    </section>
  );
}