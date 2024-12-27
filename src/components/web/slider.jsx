import React from 'react';

export default function Slider({ products }) {
  return (
    <section className="bg-white">
      <div className="container px-4 py-16 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4">
            Designer Dress Collection
          </h1>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {products?.map((product) => (
            <div
              key={product.id}
              className="w-full sm:w-1/2 lg:w-1/4 xl:w-1/5 p-4">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="relative">
                  <img
                    alt={product.text}
                    className="h-48 w-full object-cover object-center"
                    src={product.img_url}
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-gray-900 font-medium text-lg mb-2">
                    {product.text}
                  </h3>
                  <p className='text-gray-600'>DB:Studio</p>
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
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center text-black ">
          <button className="justify-center bg-black p-2 text-center font-bold text-white hover:bg-white hover:text-black border rounded-sm">Browse Our Collection</button>
        </div>


      </div>
    </section>
  );
}
