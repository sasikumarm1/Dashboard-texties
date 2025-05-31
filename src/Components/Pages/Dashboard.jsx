import React from 'react'

const Dashboard = () => {
  return (
    <div className="space-y-6 p-6 bg-gray-200 min-h-screen w-10/12 ml-auto rounded-xl shadow-lg text-gray-800">
      <header>
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-500">Overview of textile business performance</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-gray-700">Total Orders</h2>
          <p className="text-3xl text-blue-600 font-bold mt-2">1,230</p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-gray-700">Stock Level</h2>
          <p className="text-3xl text-green-600 font-bold mt-2">8,542</p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-gray-700">Revenue</h2>
          <p className="text-3xl text-amber-600 font-bold mt-2">₹4,50,000</p>
        </div>
      </div>
    </div>

  )
}

export default Dashboard
