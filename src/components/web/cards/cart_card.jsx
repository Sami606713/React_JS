import React from 'react'

export function Cart_Card() {
    return (
        <div className="flex flex-col gap-6 border-2 bg-white p-6 lg:flex-row">
            {/* <!-- Text Content --> */}
            <div className="flex-1 border-2 bg-white p-4">
                <img alt="ecommerce" className="rounded object-cover" src="src/assets/dress.jpg" />
            </div>

            {/* <!-- Form Section --> */}
            <div className="flex-1 bg-white p-4">
                <div className="mb-6">
                    <h1 className="text-xl font-bold text-gray-800">Lace Applied for them</h1>
                    <span className="text-sm text-gray-600">DB Studio</span>
                </div>

                {/* <!-- Rental Period --> */}
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700">Rental Period</label>
                    <div className="flex flex-col gap-4 md:flex-row md:items-center">
                        <div className="flex items-center gap-4">
                            <span className="text-gray-600">From:</span>
                            <input
                                type="date"
                                className="w-full rounded border px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                </div>

                {/* <!-- Size Input --> */}
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700">Size</label>
                    <input
                        type="number"
                        className="w-full rounded border px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter size"
                    />
                </div>

                {/* <!-- Number of Dresses --> */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Number of Dresses</label>
                    <input
                        type="number"
                        value="5"
                        className="w-full rounded border px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter number of dresses"
                    />
                </div>
            </div>

            {/* <!-- Price Card --> */}
            <div className="flex-1 border-2 bg-white p-4 ">
                <div className="mb-6 p-4 ">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-semibold text-gray-800">$65 <span className="text-sm text-gray-600">For Rent</span></h1>
                    </div>
                    <hr className="my-4 border-t border-gray-300" />
                    <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-800">5 X $65</span>
                        <span className="font-medium text-gray-800">$245</span>
                    </div>
                </div>

                {/* <!-- Subtotal --> */}
                <div className="mb-4 flex items-center justify-between">
                    <h1 className="font-medium text-gray-700">Subtotal</h1>
                    <h1 className="font-semibold text-gray-800">$340</h1>
                </div>

                {/* <!-- Delivery --> */}
                <div className="mb-4 flex items-center justify-between">
                    <h1 className="font-medium text-gray-700">Delivery</h1>
                    <h1 className="font-semibold text-gray-800">$20</h1>
                </div>

                {/* <!-- Total --> */}
                <div className="flex items-center justify-between border-t border-gray-300 pt-4">
                    <h1 className="text-lg font-bold text-gray-900">Total</h1>
                    <h1 className="text-lg font-bold text-gray-900">$360</h1>
                </div>
            </div>
        </div>
    )
}
