import React from 'react'
import { Cart_Card } from '../components/web/cards/cart_card'

export default function Cart_Page() {
    return (
        <>
            <div>
                <Cart_Card />


                <Cart_Card />

                {/* Main container for the right-aligned div */}
                <div className="flex flex-col lg:flex-row lg:justify-end p-4 m-10">
                    {/* Right-aligned summary card */}
                    <div className="border-2 bg-white p-4 min-w-0 lg:w-1/4">
                        {/* Subtotal */}
                        <div className="mb-4 flex items-center justify-between">
                            <h1 className="font-medium text-gray-700">Dress 1</h1>
                            <h1 className="font-semibold text-gray-800">$340</h1>
                        </div>

                        {/* Delivery */}
                        <div className="mb-4 flex items-center justify-between">
                            <h1 className="font-medium text-gray-700">Dress 2</h1>
                            <h1 className="font-semibold text-gray-800">$320</h1>
                        </div>

                        {/* Total */}
                        <div className="flex items-center justify-between pt-4">
                            <h1 className="text-lg font-bold text-gray-900">Grand Total</h1>
                            <h1 className="text-lg font-bold text-gray-900">$660</h1>
                        </div>
                        <div>
                            <button className="w-full border-2 border-black bg-black text-white p-3 mt-4 hover:bg-white hover:text-black hover:font-bold">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
