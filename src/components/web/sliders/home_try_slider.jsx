import React from 'react'
import { useNavigate } from "react-router";

export default function Home_Try_Slider() {
    const navigate = useNavigate();
    return (
        <div className="relative h-[50vh] border-2 flex items-center justify-center bg-gray-100">
            {/* Background Image */}
            <img
                src="src/assets/image-1.jpg"
                alt="Background"
                className="absolute top-0 left-0 h-full w-full object-cover z-0 opacity-100"
            />

            {/* Text and Button in the Foreground */}
            <div className="relative z-10 text-center text-white p-4">
                <h1 className="text-4xl font-bold mb-3">Looking For Something Special</h1>
                <p className="text-lg mb-4">
                    Explore our finest collection of designer dresses in one place
                </p>
                <button className="bg-white text-black py-2 px-4 hover:bg-black hover:text-white 
                transition duration-300 border border-white" onClick={
                    ()=>navigate('/collection')
                }>
                    Browse Our Collection
                </button>
            </div>
        </div>

    )
}
