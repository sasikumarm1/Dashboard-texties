import React from 'react'

const Orders = () => {
  return (
    <div className="space-y-6 p-6 bg-gray-200 min-h-screen w-10/12 ml-auto rounded-xl shadow-lg text-gray-800">
      <h1 className="text-2xl font-bold text-gray-800">Orders</h1>

      <table className="min-w-full bg-white rounded-2xl shadow overflow-hidden">
        <thead className="bg-gray-200 text-gray-600 text-left">
          <tr>
            <th className="px-6 py-3">Order ID</th>
            <th className="px-6 py-3">Customer</th>
            <th className="px-6 py-3">Amount</th>
            <th className="px-6 py-3">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4">#ORD1234</td>
            <td className="px-6 py-4">Rajesh Kumar</td>
            <td className="px-6 py-4">₹1,500</td>
            <td className="px-6 py-4 text-green-600 font-semibold">Delivered</td>
          </tr>
          <tr>
            <td className="px-6 py-4">#ORD1235</td>
            <td className="px-6 py-4">Sneha R.</td>
            <td className="px-6 py-4">₹2,000</td>
            <td className="px-6 py-4 text-yellow-500 font-semibold">Pending</td>
          </tr>
        </tbody>
      </table>
    </div>

  )
}

export default Orders
