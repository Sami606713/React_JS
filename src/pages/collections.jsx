import React from 'react'
import { Slider } from '../components/web/sliders/slider.jsx'

export default function Collections() {
  const products = [
    {
      "id": 1,
      "img_url": "src/assets/image-1.jpg",
      "text": "Lace Applique Mermaid Strapless Wedding Dress",
      "rent_price": "$500",
      "sale_price": "$500"
    },
    {
      "id": 2,
      "img_url": "src/assets/image-1.jpg",
      "text": "Lace Applique Mermaid Strapless Wedding Dress",
      "rent_price": "$500",
      "sale_price": "$500"
    },
    {
      "id": 3,
      "img_url": "src/assets/image-3.jpg",
      "text": "Lace Applique Mermaid Strapless Wedding Dress",
      "rent_price": "$500",
      "sale_price": "$500"
    },
    {
      "id": 4,
      "img_url": "src/assets/image-3.jpg",
      "text": "Lace Applique Mermaid Strapless Wedding Dress",
      "rent_price": "$500",
      "sale_price": "$500"
    },
    {
      "id": 5,
      "img_url": "src/assets/image-3.jpg",
      "text": "Lace Applique Mermaid Strapless Wedding Dress",
      "rent_price": "$500",
      "sale_price": "$500"
    },
    {
      "id": 6,
      "img_url": "src/assets/image-3.jpg",
      "text": "Lace Applique Mermaid Strapless Wedding Dress",
      "rent_price": "$500",
      "sale_price": "$500"
    }
  ]

  return (
    <div className='container mx-auto mt-10 mb-10 items-center justify-between'>
      <h1 className='lg:text-6xl md:text-4xl md:font-bold sm:text-3xl sm:font-bold sm:justify-center sm:items-center'>
        Our Collection
      </h1>

      <div className='lg:flex lg:flex-wrap lg:gap-4 lg:mt-10'>
        {/* Filter Div */}
        <div className="bg-white text-black mt-5 p-6 border-2 border-gray-300 -lg w-full md:w-[20%] lg:w-[20%] h-auto max-h-screen overflow-auto">
          <h3 className="text-2xl sm:text-xl md:text-2xl font-bold mb-4 text-gray-800">Filter By</h3>

          {/* Categories */}
          <div className="mb-6">
            <h4 className="text-xl sm:text-lg md:text-xl font-semibold text-gray-700 mb-2">Categories</h4>
            <div className="space-y-2">
              {["Beading", "Lace", "Shoulder"].map((category) => (
                <label key={category} className="flex items-center sm:text-xs text-gray-500 font-bold text-xl">
                  <input type="checkbox" value={category} className="mr-2" />
                  {category}
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <h4 className="text-xl sm:text-lg md:text-xl font-semibold text-gray-700 mb-2">Price</h4>
            <input type="range" min="0" max="500" className="w-full mt-2 accent-blue-500 rounded-lg" />
            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>$0</span>
              <span>$500</span>
            </div>
          </div>

          {/* Size Options */}
          <div className="mb-6">
            <h4 className="text-xl sm:text-lg md:text-xl font-semibold text-gray-700 mb-2">Size</h4>
            <div className="space-y-2 flex gap-4 mt-2">
              {["S", "M", "L","XL"].map((category) => (
                <label key={category} className="flex items-center sm:text-xs text-gray-500 font-bold text-xl">
                  <input type="checkbox" value={category} className="mr-2" />
                  {category}
                </label>
              ))}
            </div>
          </div>

          {/* Availability Options */}
          <div className="mb-6">
            <h4 className="text-xl sm:text-lg md:text-xl font-semibold text-gray-700 mb-2">Availability</h4>
            <div className="space-y-2 flex gap-4 mt-2">
              {["In Stock", "Out Of Stock"].map((category) => (
                <label key={category} className="flex items-center text-gray-500 font-bold text-xl sm:text-xs">
                  <input type="checkbox" value={category} className="mr-2" />
                  {category}
                </label>
              ))}
            </div>
          </div>

          {/* Fabric */}
          <div className="mb-6">
            <h4 className="text-xl sm:text-lg md:text-xl font-semibold text-gray-700 mb-2">Fabric</h4>

            <div className="space-y-2 flex gap-4 mt-2">
              {["Cotton", "Silk", "Polyester"].map((category) => (
                <label key={category} className="flex items-center text-gray-500 font-bold text-xl sm:text-xs">
                  <input type="checkbox" value={category} className="mr-2" />
                  {category}
                </label>
              ))}
            </div>
          </div>

        </div>

        {/* Collection Div */}
        <div className='text-white mt-5 mb-5  w-full md:w-[70%] lg:w-[70%] h-auto'>
          <Slider products={products} options={{"show_price_tag":true}} />

          {/* moving buttons */}
          <div className='flex justify-end gap-4 mt-5'>
            {[1, 2, 3, 4, 5,6,7].map((item) => (
              <button key={item} className="bg-black px-1 py-1 text-center font-bold text-white hover:bg-white hover:text-black border border-gray-500 transition-all duration-200 transform hover:scale-105 w-7 h-7 ">
                {item}
              </button>
            ))}
            {/* forward button */}
            <button className="bg-black px-2 mt-2 text-center font-bold text-2xl text-white hover:bg-white hover:text-black border border-gray-500 transition-all duration-200 transform hover:scale-105 w-10 h-10">
            {'>'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
