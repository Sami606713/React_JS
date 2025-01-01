import React from 'react'
import { Slider } from '../sliders/slider'
import { useNavigate } from 'react-router-dom'

export function Dress_Detail_Card() {
    const navigate = useNavigate()
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

    const products2 = [
        {
            "id": 1,
            "img_url": "src/assets/dress.jpg",
            "text": "Lace Applique Mermaid Strapless Wedding Dress",
            "rent_price": "$500",
            "sale_price": "$500"
        },
        {
            "id": 2,
            "img_url": "src/assets/dress.jpg",
            "text": "Lace Applique Mermaid Strapless Wedding Dress",
            "rent_price": "$500",
            "sale_price": "$500"
        },
        {
            "id": 3,
            "img_url": "src/assets/dress.jpg",
            "text": "Lace Applique Mermaid Strapless Wedding Dress",
            "rent_price": "$500",
            "sale_price": "$500"
        }
    ]
    return (
        <section className="body-font overflow-hidden bg-white text-black">
            <div className="container mx-auto px-5 py-24">
                <div className="flex flex-wrap lg:flex-nowrap">
                    {/* <!-- Main Image and Thumbnail Section --> */}
                    <div className="flex w-full flex-col lg:w-2/3">
                        {/* <!-- Main Image --> */}
                        <div className="h-[100vh] w-full">
                            <img alt="ecommerce" className="h-full w-full rounded object-cover" src="src/assets/dress.jpg" />
                        </div>
                        {/* <!-- Thumbnails Below Main Image --> */}
                        <div className="mt-4 flex flex-wrap gap-4 lg:flex-row lg:flex-wrap">
                            <div className="h-[50%] w-[50%] lg:h-[50vh] lg:w-[50%]">
                                <img alt="ecommerce" className="h-full w-full rounded object-cover" src="src/assets/dress.jpg" />
                            </div>

                        </div>
                    </div>

                    {/* <!-- Cart Information --> */}
                    <div className="mt-10 w-full lg:mt-0 lg:w-1/3 lg:pl-10">
                        <h1 className="title-font mb-1 text-3xl font-medium text-black">The Catcher in the Rye</h1>
                        <h2 className="text-sm text-gray-500">DB Studio</h2>
                        <div className="mb-4 flex">
                            <span className="flex items-center">
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="h-4 w-4 text-indigo-400" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="h-4 w-4 text-indigo-400" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="h-4 w-4 text-indigo-400" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="h-4 w-4 text-indigo-400" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                {/* <!-- Stars --> */}
                                <span className="ml-3">4 Reviews</span>
                            </span>
                        </div>
                        <div>
                            <span className="text-4xl">$65</span>
                            <span className="text-sm text-gray-500">For Rent</span>
                        </div>
                        {/* <!-- Additional Cart Details --> */}
                        <div className="mb-5 mt-6 flex flex-col gap-4">
                            <div>
                                <label>Rental Period</label>
                                <div className="flex gap-2">
                                    <span>From</span>
                                    <input type="date" className="rounded border px-2 py-1" />
                                    <span>To</span>
                                    <input type="date" className="rounded border px-2 py-1" />
                                </div>
                            </div>
                            <div>
                                <label>Size</label>
                                <input type="number" className="w-full rounded border px-2 py-1" placeholder="Enter size" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <button className="border-2 bg-black px-4 py-2 text-white hover:bg-white hover:text-black" onClick={
                                    () => {
                                        navigate('/cart')
                                    }
                                }>Add To Bag</button>
                                <button className="border-2 bg-white px-4 py-2 text-black hover:bg-black hover:text-white">Wishlist</button>
                            </div>

                            <div>
                                <span>How many dress did you want</span>
                                <div className="mt-3 flex flex-row gap-2">
                                    <button className="border-2 bg-white p-5 text-black hover:bg-black hover:font-bold hover:text-white">1</button>
                                    <button className="border-2 bg-white p-5 text-black hover:bg-black hover:font-bold hover:text-white">2</button>
                                    <button className="border-2 bg-white p-5 text-black hover:bg-black hover:font-bold hover:text-white">3</button>
                                    <button className="border-2 bg-white p-5 text-black hover:bg-black hover:font-bold hover:text-white">4</button>
                                    <button className="border-2 bg-white p-5 text-black hover:bg-black hover:font-bold hover:text-white">5</button>
                                    <button className="border-2 bg-white p-5 text-black hover:bg-black hover:font-bold hover:text-white">6</button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Product Details --> */}
                        <div>
                            <div>
                                <h2 className="text-lg font-bold">Details</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor sunt, dolorum nobis earum veniam maxime. Animi, ex perferendis beatae sunt distinctio, asperiores doloribus aspernatur, explicabo quaerat molestias sed nam incidunt.</p>
                            </div>

                            <div className="mt-5">
                                <h1>Materials and Measurements</h1>
                                <div>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit accusamus eaque at nihil laudantium similique aliquam aperiam animi, vel dolores veritatis earum deleniti laboriosam, provident repellat consectetur fuga quasi maxime!</p>
                                </div>
                            </div>

                            <div className="mt-5">
                                <h1 className="text-2xl">Size and Fit</h1>
                                <div>
                                    <span><strong>Sized: </strong>0R-16R</span>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit accusamus eaque at nihil laudantium similique aliquam aperiam animi, vel dolores veritatis earum deleniti laboriosam, provident repellat consectetur fuga quasi maxime!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- How Others Look Section --> */}
                <div className="mt-10">
                    <h1 className="mb-4 text-6xl text-black">How Others Look In This Dress</h1>
                    <Slider products={products2} options={{ "show_price_tag": false }} />
                </div>

                <div className="mt-10">
                    <h1 className="mb-4 text-black text-6xl">Explore More</h1>
                    <Slider products={products} options={{ "show_price_tag": true }} />
                </div>
            </div>
        </section>

    )
}
