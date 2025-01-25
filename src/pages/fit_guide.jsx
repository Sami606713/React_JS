import React from 'react'
import { Fit_Guide_Card } from '../components/web/cards/fit_guide_card'
import { Slider } from '../components/web/sliders/slider'
import { useNavigate} from 'react-router-dom'

export default function Fit_Guide() {
  const navigate = useNavigate()
  const products = [
    {
      "id": 1,
      "img_url": "src/assets/git_card1.png",
      "text": "Lace Applique Mermaid Strapless Wedding Dress",
      "rent_price": "$500",
      "sale_price": "$500"
    },
    {
      "id": 2,
      "img_url": "src/assets/git_card2.png",
      "text": "Lace Applique Mermaid Strapless Wedding Dress",
      "rent_price": "$500",
      "sale_price": "$500"
    },
    {
      "id": 3,
      "img_url": "src/assets/git_card1.png",
      "text": "Lace Applique Mermaid Strapless Wedding Dress",
      "rent_price": "$500",
      "sale_price": "$500"
    }
  ]
  return (
    <div>
      <section className='top_card mx-auto p-4 bg-pink-100 border-2 border-gray-200  h-[100vh] flex flex-col justify-center items-center'>
        <div className='text-7xl text-center'>
          <h1>Fit Your Perfect Dress Size</h1>
        </div>

        <div className='text-2xl text-center'>
          <p>Just answer some basic questions and get your perfect dres size in on time.</p>
        </div>

        <div className='mt-4 text-1xl'>
          <button className='border-2 border-black px-7 py-3 bg-black text-white hover:bg-white
           hover:text-black'
          onClick={
            ()=>{
              navigate('/guide/page')
            }
          }
           > Start Fit Guide</button>
        </div>
      </section>

      {/* Fit Guide Card */}
      <div>
        <Fit_Guide_Card />
      </div>

      {/* People like */}
      <div>
        <div className="w-[90vw] sm:w-[70vw] lg:w-[50vw] mx-auto mt-10">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl text-center font-bold text-black mb-4">
            1000+ People find their perfect size
          </h1>
        </div>

        {/* Slider */}
        <Slider products={products} options={{ "show_price_tag": false }} />

        <div className='mt-4 text-1xl mb-20 text-center'>
          <button className='border-2 border-black px-7 py-3 bg-black text-white hover:bg-white
           hover:text-black'> Start Fit Guide</button>
        </div>

      </div>
    </div>
  )
}
