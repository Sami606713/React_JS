import React from 'react';

export function Fit_Guide_Page() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      {/* Question Section */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-700 mb-2">01</h1>
        <h2 className="text-2xl text-gray-600">Q: How tall are you?</h2>
      </div>

      {/* Input Section */}
      <div className="bg-white shadow-md  p-6 w-full max-w-md">
        {/* Feet Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Feet</label>
          <input
            type="number"
            placeholder="Enter your height in feet"
            className="w-full px-4 py-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Inches Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Inches</label>
          <input
            type="number"
            placeholder="Enter your height in inches"
            className="w-full px-4 py-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-indigo-500 shadow-md">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
