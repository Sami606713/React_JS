import React from 'react'
import { useState } from 'react'

export default function FAQ() {
  return (
    <div>
      <div>
        <div className="min-h-[50vh] items-center justify-center border text-center">
          <h1 className="mb-5 mt-1 text-6xl font-bold">Frequently Asked Questions</h1>

          <span className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dolorem id, dolor neque eos qui placeat vel quaerat, tempore eum asperiores voluptatum suscipit labore cupiditate corporis dolorum fugiat aut explicabo.</span>
        </div>

        <div className="border mt-5 flex gap-5">
          <div className="border-black border-2 w-[20vw] flex flex-col ">
            <button className="border-t-2 px-5 py-2 hover:bg-pink-100 hover:font-bold" >Rental</button>
            <button className="border-t-2 px-5 py-2 hover:bg-pink-100 hover:font-bold" >Returns</button>
            <button className="border-t-2 px-5 py-2 hover:bg-pink-100 hover:font-bold" >Shipping</button>

            <button className="border-t-2 px-5 py-2 hover:bg-pink-100 hover:font-bold">Bridal HQ</button>

            <button className="border-t-2 px-5 py-2 hover:bg-pink-100 hover:font-bold" 
            >Popular Question</button>
          </div>

          <div className="border-black border-2 w-[80vw]">
                <select className="border-2 border-black w-[100%] h-10"> 

                  <option value="1">How do I return my order?</option>
                </select>
          </div>
        </div>

      </div>

    </div>
  )
}
