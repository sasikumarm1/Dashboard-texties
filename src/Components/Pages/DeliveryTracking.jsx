import React, { useState } from 'react';

const DeliveryTracking = () => {
  const [deliveries, setDeliveries] = useState([
    {
      id: 1,
      orderId: 'ORD1234',
      status: 'Pending',
      agent: 'John Doe',
    },
    {
      id: 2,
      orderId: 'ORD1235',
      status: 'Shipped',
      agent: 'Jane Smith',
    },
  ]);

  const [form, setForm] = useState({ orderId: '', status: 'Pending', agent: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      id: deliveries.length + 1,
      ...form,
    };
    setDeliveries([newEntry, ...deliveries]);
    setForm({ orderId: '', status: 'Pending', agent: '' });
  };

  const statusStyle = {
    Pending: 'bg-yellow-100 text-yellow-800',
    Shipped: 'bg-blue-100 text-blue-800',
    Delivered: 'bg-green-100 text-green-800',
  };

  return (
    <div className="space-y-6 p-6 bg-gray-200 min-h-screen w-10/12 ml-auto rounded-xl shadow-lg text-gray-800 ">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Delivery Tracking</h1>
          <p className="text-gray-500">Monitor and update product delivery status</p>
        </div>
        
      </div>

      {/* Tracking Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded-2xl overflow-hidden">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-6 py-3 text-left">Order ID</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Delivery Agent</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {deliveries.map((delivery) => (
              <tr key={delivery.id}>
                <td className="px-6 py-4 font-medium">{delivery.orderId}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${statusStyle[delivery.status]}`}
                  >
                    {delivery.status}
                  </span>
                </td>
                <td className="px-6 py-4">{delivery.agent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Tracking Form */}
      <div id="tracking-form" className="bg-white p-6 rounded-2xl shadow max-w-xl space-y-4">
        <h2 className="text-xl font-semibold text-gray-700">Add Delivery Tracking</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Order ID</label>
            <input
              type="text"
              name="orderId"
              value={form.orderId}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
              placeholder="e.g. ORD1236"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Status</label>
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
              required
            >
              <option>Pending</option>
              <option>Shipped</option>
              <option>Delivered</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">Delivery Agent</label>
            <input
              type="text"
              name="agent"
              value={form.agent}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
              placeholder="e.g. Ali Khan"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
          >
            Add Tracking
          </button>
        </form>
      </div>
    </div>
  );
};

export default DeliveryTracking;

