import React from 'react'
import { First_Card } from '../components/web/cards/card'
import Home_Try_Slider from '../components/web/sliders/home_try_slider'
import { Pic_Slider } from '../components/web/sliders/slider.jsx'

export default function About() {
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
    <div className='w-[90vw] mx-auto mt-10 p-5 mb-0'>
      <First_Card props={
        {
          "head": "About Us",
          "text": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus modi itaque voluptate deleniti nam. Reiciendis quibusdam dolores quia laudantium veritatis, culpa praesentium perspiciatis ratione velit minima. Odit molestiae voluptates iure.",
          "reverse": false,
          "show_btn": false
        }
      } />

      <First_Card props={
        {
          "head": "Established In 2023",
          "text": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus modi itaque voluptate deleniti nam. Reiciendis quibusdam dolores quia laudantium veritatis, culpa praesentium perspiciatis ratione velit minima. Odit molestiae voluptates iure.",
          "reverse": true,
          "show_btn": false
        }
      } />

      <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-12 max-w-3xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6">
          It's More About A Story
        </h1>

        {/* Description */}
        <div>
          <p className="text-black text-base sm:text-lg md:text-xl leading-relaxed text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsa molestias quam, eveniet suscipit voluptatem tempore quasi eaque sunt, doloribus architecto facere autem enim assumenda minus. Distinctio perspiciatis aperiam beatae!
          </p>
        </div>
      </div>

      <div className='mb-5'>
        <Pic_Slider products={only_img}/>
      </div>
      
      <div>
      <Home_Try_Slider/>
      </div>

    </div>
  )
}

