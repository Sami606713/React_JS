import React from 'react'
import { useState } from 'react'

export default function FAQ() {
  const [faqs, setFaq] = useState("Faq")
  return (
    <div>
      <div>
        <div className="min-h-[50vh] items-center justify-center border text-center">
          <h1 className="mb-5 mt-1 text-6xl font-bold">Frequently Asked Questions</h1>

          <span className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dolorem id, dolor neque eos qui placeat vel quaerat, tempore eum asperiores voluptatum suscipit labore cupiditate corporis dolorum fugiat aut explicabo.</span>
        </div>

        <div className="border mt-5 flex gap-5">
          <div className="border-black border-2 w-[20vw] flex flex-col ">
            <button className="border-t-2 px-5 py-2 hover:bg-pink-100 hover:font-bold" onClick={
              () => setFaq("Rental")
            }>Rental</button>
            <button className="border-t-2 px-5 py-2 hover:bg-pink-100 hover:font-bold" onClick={
              ()=>setFaq("Returns")
            }>Returns</button>
            <button className="border-t-2 px-5 py-2 hover:bg-pink-100 hover:font-bold" onClick={
              ()=>setFaq("Shipping")
            }>Shipping</button>

            <button className="border-t-2 px-5 py-2 hover:bg-pink-100 hover:font-bold" onClick={
              ()=>setFaq()
            }>Bridal HQ</button>

            <button className="border-t-2 px-5 py-2 hover:bg-pink-100 hover:font-bold" onClick={
              ()=>setFaq("Popular Question")
            }>Popular Question</button>
          </div>

          <div className="border-black border-2 w-[80vw]">
                <h1>{faqs}</h1>
          </div>
        </div>

      </div>

    </div>
  )
}
