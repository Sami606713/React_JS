import React from 'react'

export function Home_Try_Cards() {
    return (
        <div>
            {/* Main container */}
            <div className="flex flex-wrap md:flex-nowrap">
                {/* Home try-on text section */}
                <div className="md:w-1/2 w-full p-5 flex flex-col justify-center items-start text-left">
                    <h1 className="text-6xl md:text-6xl font-bold mb-5 text-gray-800">
                        Home Try-On
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-5 leading-relaxed">
                        Try a dress at your home to make sure it's the right fit for you.
                    </p>
                    <button className="px-5 py-3 border-2 bg-black text-white font-bold text-lg  hover:bg-white hover:text-black  border-black transition">
                        Start Home Try-On
                    </button>
                </div>

                {/* Image section */}
                <div className="md:w-1/2 w-full p-5 flex items-center justify-center">
                    <div className="overflow-hidden w-full h-full">
                        {/* Placeholder for image */}
                        <img
                            src="src/assets/home_try2.jpg"
                            alt="Try-On"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}


export function Experience_Card({ props }) {
    return (
      <div
        className={`container mx-auto flex flex-col overflow-hidden bg-[#F5EFED] text-black sm:px-6 sm:py-16 md:py-20 lg:flex-row lg:gap-4 ${props.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} lg:py-2 lg:pt-10 lg:gap-10 sm:pt-1 md:pt-1`}
      >
        <div className="mt-6 flex w-full flex-col justify-center px-4 sm:px-6 lg:mt-0 lg:w-1/2 lg:px-10">
          <h1 className="title-font mt-5 mb-4 text-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-center lg:text-left">
            {props.head}
          </h1>
  
          <p className="mb-6 text-center leading-relaxed text-black lg:text-left">
            Gather yout bridesmaids and select dresses for them, keep the track of their progress and much more within the platoform.
          </p>
  
          {props.show_btn && (
            <div className="flex justify-center lg:justify-start mb-5">
              <button className="rounded bg-black px-8 py-3 text-white transition-colors duration-300 hover:bg-white hover:text-black">
                Button
              </button>
            </div>
          )}
        </div>
  
        <div className="w-full lg:w-1/2 lg:h-1/2">
          <img
            alt="ecommerce"
            className="h-auto w-full object-cover sm:h-72 md:h-80 lg:h-[400px]"
            src={props.img}
          />
        </div>
      </div>
    );
  }
  