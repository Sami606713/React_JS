import React from "react";

export function First_Card({ props }) {
  return (
    <div className={`flex flex-col mt-0 w-[80vw] m-auto md:flex-row items-center gap-6 md:gap-10 bg-white px-4 md:px-16 py-10 ${props.reverse ? "lg:flex-row-reverse" : ""}`
    }>
      {/* Text Section */}
      <div className="flex flex-col text-center md:text-left">
        <h1 className="text-6xl md:text-5xl font-bold mb-4 justify-space">
          {props.head}
          {/* <img src="src/assets/Group.jpg" className="h- w-10"/> */}
        </h1>
        <p className="text-black text-sm md:text-base mb-6">
          {props.text}
        </p>

        {props.show_btn && (
          <div className="flex justify-center md:justify-start gap-4">
            <button className="bg-black border-black text-white px-4 py-2 text-sm md:text-base rounded transition-all duration-200 hover:bg-white  hover:text-black border">
              Rent Now
            </button>
            <button className="border border-black text-black px-4 py-2 text-sm md:text-base rounded transition-all duration-200 hover:bg-black hover:text-white">
              Explore Our Collection
            </button>
          </div>)
        }
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <img
          src="src/assets/image_01.jpg"
          alt="Dream Dress"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}



export function Rent_Card({ item }) {
  return (
    <div className="relative h-64 mt-0 w-full border shadow-md sm:h-72 md:h-80 lg:h-96" style={{ backgroundImage: `url(${item.img_url})` }}>
      <div className="absolute bottom-6 left-6 max-w-[100%]">
        <h1 className="mb-2 text-3xl font-bold text-white sm:text-4xl md:text-5xl">{item.head}</h1>
        <p className="mb-4 text-sm text-white sm:text-base md:text-lg">
          {item.text}
        </p>
        <button className="rounded bg-white px-3 py-1.5 text-sm text-black transition-all duration-200 hover:bg-gray-900 hover:text-white sm:px-4 sm:py-2 sm:text-base">
          {item.btn_text}
        </button>
      </div>
    </div>
  )
}


export function Party_Card({ item }) {
  return (
    <div className="container mx-auto flex flex-col gap-4 overflow-hidden bg-white text-black px-4 sm:px-6 sm:py-16 md:py-20 lg:w-4/5 lg:flex-row lg:gap-4 lg:py-2">{/* style={{flexDirection:item.reverse?"row-reverse":""}}*/}
      <div className="mt-6 flex w-full flex-col justify-center bg-pink-100 px-4 sm:px-6 lg:mt-0 lg:w-1/2 lg:px-10">
        <h1 className="title-font font-bold mt-5 mb-4 text-center text-4xl text-black sm:text-3xl md:text-4xl lg:text-left">
          {item.head}
        </h1>

        <p className="mb-6 text-center leading-relaxed text-black lg:text-left">
          Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.
        </p>

        <div className="flex justify-center lg:justify-start mb-5">
          <button className="rounded bg-black p-8 py-3 text-white transition-colors duration-300 hover:bg-white hover:text-black">
            {item.btn_text}
          </button>
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <img
          alt="ecommerce"
          className="h-auto w-full object-cover bg-no-repeat sm:h-72 md:h-80 lg:h-[400px]]"
          src={item.img_url}
        />
      </div>
    </div>
  )
}

