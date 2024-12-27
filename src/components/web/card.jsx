import React from "react";
export function First_Card() {
  return (
    <div className="flex flex-col mt-0 md:flex-row items-center gap-6 md:gap-10 bg-white px-4 md:px-16 py-10">
      {/* Text Section */}
      <div className="flex flex-col text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Rent Your Dream Dress Now!</h1>
        <p className="text-gray-600 text-sm md:text-base mb-6">
          Rent a designer-quality dress, or buy one to wear on repeat.
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          <button className="bg-black text-white px-4 py-2 text-sm md:text-base rounded transition-all duration-200 hover:bg-gray-800">
            Rent Now
          </button>
          <button className="border border-black text-black px-4 py-2 text-sm md:text-base rounded transition-all duration-200 hover:bg-gray-800 hover:text-white">
            Explore Our Collection
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <img
          src="src/assets/bg1.jpg"
          alt="Dream Dress"
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}



export function Rent_Card(props) {
  return (
    <div className="relative h-64 w-full rounded-lg border bg-[url('src/assets/bg1.jpg')] bg-cover bg-center shadow-md sm:h-72 md:h-80 lg:h-96">
      <div className="absolute bottom-6 left-6 max-w-[80%]">
        <h1 className="mb-2 text-3xl font-bold text-white sm:text-4xl md:text-5xl">Just Rent</h1>
        <p className="mb-4 text-sm text-white sm:text-base md:text-lg">
          Rent a designer-quality dress, or buy one to wear on repeat
        </p>
        <button className="rounded bg-white px-3 py-1.5 text-sm text-black transition-all duration-200 hover:bg-gray-900 hover:text-white sm:px-4 sm:py-2 sm:text-base">
          RENT NOW
        </button>
      </div>
    </div>
  )
}

