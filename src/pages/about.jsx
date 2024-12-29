import React from 'react'
import { First_Card } from '../components/web/cards/card'
import Home_Try_Slider from '../components/web/sliders/home_try_slider'

export default function About() {
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
          "head": "About Us",
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
          <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsa molestias quam, eveniet suscipit voluptatem tempore quasi eaque sunt, doloribus architecto facere autem enim assumenda minus. Distinctio perspiciatis aperiam beatae!
          </p>
        </div>
      </div>
      
      <div>
      <Home_Try_Slider/>
      </div>

    </div>
  )
}

