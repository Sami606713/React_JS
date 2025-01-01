import React from 'react'
import { Cart_Card } from '../components/web/cards/cart_card'

export default function Cart_Page() {
    return (
        <>
            <div>
                <Cart_Card />
            </div>

            <div>
                <Cart_Card />
            </div>

            {/* Main container for the right-aligned div */}
            <div className="flex flex-col lg:flex-row lg:justify-end border-t-2 border-gray-200 p-4">
                {/* Right-aligned summary card */}
                <div className="border-2 bg-white p-4 min-w-0 lg:w-1/4">
                    <div className="mb-6 p-4">
                        <div className="flex items-center justify-between">
                            <h1 className="text-2xl font-semibold text-gray-800">
                                $65 <span className="text-sm text-gray-600">For Rent</span>
                            </h1>
                        </div>
                        <hr className="my-4 border-t border-gray-300" />
                        <div className="flex items-center justify-between">
                            <span className="font-medium text-gray-800">5 X $65</span>
                            <span className="font-medium text-gray-800">$245</span>
                        </div>
                    </div>

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
                    <div className="flex items-center justify-between border-t border-gray-300 pt-4">
                        <h1 className="text-lg font-bold text-gray-900">Grand Total</h1>
                        <h1 className="text-lg font-bold text-gray-900">$660</h1>
                    </div>
                    <div>
                        <button className="w-full border-2 border-black bg-black text-white p-3 mt-4 hover:bg-white hover:text-black">Checkout</button>
                    </div>
                </div>
            </div>
        </>
    );
}
