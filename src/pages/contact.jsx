import React from 'react'

export default function Contact() {
  return (
    <div className="container mx-auto py-20 px-5 mt-20">
    <div className="flex flex-wrap">
      {/* <!-- Left Section --> */}
      <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
        <h1 className="text-5xl font-serif font-bold leading-tight mb-6">Get In Touch <br/> With Us</h1>
        <p className="text-lg leading-relaxed text-gray-600 mb-8">
          Lörem ipsum tant tuses. Vyrade reatyk heterongen. Padylng faftölingar maligt. Kvasist nesk kontrar. Spektiga larad kagt. Ditydokerar.
        </p>
        <div className="space-y-4">
          <div className="flex items-center text-lg text-gray-800">
            <svg className="w-6 h-6 mr-3 text-black" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M10.2 2.3C5.2 2.3 1 6.5 1 11.5S5.2 20.7 10.2 20.7s9.2-4.2 9.2-9.2S15.3 2.3 10.2 2.3zm0 15.2a5.96 5.96 0 110-11.9 5.96 5.96 0 010 11.9z"/>
              <circle cx="10.2" cy="11.5" r="2.6"/>
            </svg>
            <p>7268 Caswell Street, North Syracuse, NY 13212</p>
          </div>
          <div className="flex items-center text-lg text-gray-800">
            <svg className="w-6 h-6 mr-3 text-black" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.9 9.2L10.7 2 18 9.2l-7.3 6.4L2.9 9.2z"/>
            </svg>
            <p>Info@Helpinghoundsny.Com</p>
          </div>
          <div className="flex items-center text-lg text-gray-800">
            <svg className="w-6 h-6 mr-3 text-black" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.4 3.7C4.6 5.9 8.4 9.5 13 13c1.4 1.2 3 .1 4-1.4.5-.8.9-1.9 1.2-3.1-1.3-1.6-4.9-5.1-6.3-6.4-.5-1.1-1.8-.7-2.6-.3C7.1 4 3.9 6 1.4 7.7c.3 1 .6 2 .9 3l-.2-1z"/>
            </svg>
            <p>(315) 446-5970</p>
          </div>
        </div>
      </div>

      {/* <!-- Right Section --> */}
      <div className="w-full lg:w-1/2">
        <form className="bg-white border-2 border-gray-400 p-8 ">
          <div className="mb-4">
            <label for="name" className="block text-gray-700 text-sm mb-2">Full Name</label>
            <input type="text" id="name" className="w-full p-3  border border-gray-300 focus:outline-none focus:border-black"/>
          </div>
          <div className="mb-4">
            <label for="email" className="block text-gray-700 text-sm mb-2">Email Address</label>
            <input type="email" id="email" className="w-full p-3  border border-gray-300 focus:outline-none focus:border-black"/>
          </div>
          <div className="mb-4">
            <label for="subject" className="block text-gray-700 text-sm mb-2">Subject</label>
            <input type="text" id="subject" className="w-full p-3 border border-gray-300 focus:outline-none focus:border-black"/>
          </div>
          <div className="mb-6">
            <label for="message" className="block text-gray-700 text-sm mb-2">Your message....</label>
            <textarea id="message" rows="5" className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-black"></textarea>
          </div>
          <button type="submit" className="w-full bg-black border-2 text-white py-3 rounded hover:bg-white hover:text-black focus:outline-none">Submit</button>
        </form>
      </div>
    </div>
  </div>
  )
}
