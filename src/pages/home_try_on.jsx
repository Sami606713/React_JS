import React from 'react'
import { Home_Try_Cards, Experience_Card } from '../components/web/cards/home_try_cards'
import Home_Try_Slider from '../components/web/sliders/home_try_slider'
export default function Home_Try_On() {
  return (
    <>
      <section className='w-[90vw] mx-auto mt-10 p-5 mb-0'>
        <Home_Try_Cards />

        <div className='mt-5 mb-5'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold mb-5'>Get Handas-On Experience Before Your Big Day</h1>
          <div style={{ bg_color: "#F5EFED" }}>
            <Experience_Card props={{ "head": "Step1", "text": "Gather yout bridales", "Show_btn": true, "show_img": true, "bg_color": "bg-yellow-100", "img": "src/assets/home_try1.jpg" }} />
            <Experience_Card props={{ "head": "Step2", "text": "Gather yout bridales", "Show_btn": true, "show_img": true, "bg_color": "bg-yellow-100", "img": "src/assets/home_try3.jpg", "reverse": true }} />

            <Experience_Card props={{ "head": "Step3", "text": "Gather yout bridales", "Show_btn": true, "show_img": true, "bg_color": "bg-yellow-100", "img": "src/assets/home_try4.jpg" }} />
            <Experience_Card props={{ "head": "Step4", "text": "Gather yout bridales", "Show_btn": true, "show_img": true, "bg_color": "bg-[#F5EFED]", "img": "src/assets/home_try5.jpg", "reverse": true }} />
          </div>

          <div className="flex justify-center mb-5 mt-5 ">
            <button className="bg-black border-2 border-black px-8 py-3 text-white transition-colors duration-300 hover:bg-white hover:text-black">
              Start Home Try-On
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="mt-5 mb-0">
          <Home_Try_Slider />
        </div>
      </section>
    </>
  )
}
