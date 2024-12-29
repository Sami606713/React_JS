import React from 'react'
import Footer from '../components/web/footer/footer.jsx'
import { First_Card, Rent_Card, Party_Card } from '../components/web/cards/card.jsx'
import { Slider, Pic_Slider } from '../components/web/sliders/slider.jsx'

export default function Home() {
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
    }

  ]

  const only_img = [
    {
      "id": 1,
      "text": "",
      "img_url": "src/assets/image-7.jpg"
    },
    {
      "id": 2,
      "text": "",
      "img_url": "src/assets/image-6.jpg"
    },
    {
      "id": 3,
      "text": "",
      "img_url": "src/assets/image-5.jpg"
    }

  ]
  return (
    <>
      <First_Card  props={{"head":"Rent Your Dream Dress Now!","text":"Rent a designer-quality dress, or buy one to wear on repeat.","show_btn":true,"reverse":false}}/>
      <div className="just_rent flex flex-col md:flex-row bg-white mt-12 p-5 md:p-20 gap-8 md:gap-10">
        <Rent_Card
          item={{ "text": "Buy your favorite dress and wear it without repeat", "head": "Just Rent", "img_url": 'src/assets/image-11.jpg', "btn_text": "Rent Now" }}
        />
        <Rent_Card
          item={{ "text": "Buy your favorite dress and wear it without repeat", "head": "Buy and Repeat", "img_url": 'src/assets/image-12.jpg', "btn_text": "Buy Now" }}
        />
      </div>

      <div className="container px-1 py-4 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="text-8xl items-start font-bold md:text-5xl  text-black mb-4">
            Huge Collection Of Designer Dress
          </h1>
        </div>
          <Slider products={products} />
        <div className="mt-12 flex justify-center text-black">
          <button className="bg-black p-2 text-center font-bold text-white hover:bg-white hover:text-black border rounded-sm">
            Browse Our Collection
          </button>
        </div>
      </div>

      <div className='mx-auto sm:grid-cols-2 sm:px-6 md:gap-12 lg:px-8'>
        <Party_Card item={{ "head": "Bridal Party HQ", "btn_text": "Explore Our Plateform", "img_url": 'src/assets/image-13.jpg' }} />
        <Party_Card item={{ "head": "Get A Free Home Try Now", "btn_text": "Book Your Home Try-Now", "img_url": 'src/assets/image-14.jpg', "reverse": true }} />
      </div>

      {/* pic slider */}
      <div className="container px-1 py-4 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="text-8xl items-start font-bold md:text-5xl text-black mb-4">
            Cherish Your Special Movement
          </h1>
        </div>
          <Pic_Slider products={only_img} />
        <div className="mt-12 flex justify-center">
          <button className="flex items-center gap-2 rounded-md border bg-black px-4 py-2 text-white">
            <img
              src="src/assets/instagram.png"
              alt="Instagram Logo"
              className="h-5 w-5"
            />
            <span className="font-medium">Follow us on Instagram</span>
          </button>
        </div>
      </div>
    </>
  )
}
