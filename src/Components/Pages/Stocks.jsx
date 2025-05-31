import React, { useState } from 'react';

const Stocks = () => {
  const [stockItems, setStockItems] = useState([
    { id: 1, name: 'Cotton Shirts', quantity: 120, threshold: 30 },
    { id: 2, name: 'Denim Jeans', quantity: 45, threshold: 20 },
  ]);

  const [form, setForm] = useState({ name: '', quantity: '', threshold: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStock = {
      id: stockItems.length + 1,
      name: form.name,
      quantity: parseInt(form.quantity),
      threshold: parseInt(form.threshold),
    };
    setStockItems([newStock, ...stockItems]);
    setForm({ name: '', quantity: '', threshold: '' });
  };

  return (
    <div className="space-y-6 p-6 bg-gray-200 min-h-screen w-10/12 ml-auto rounded-xl shadow-lg text-gray-800">
      {/* Header and Add Button */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Stock Overview</h1>
          <p className="text-gray-500">Monitor and manage your product inventory</p>
        </div>
        
      </div>

      {/* Stock Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-2xl shadow overflow-hidden">
          <thead className="bg-gray-200 text-gray-700 text-left">
            <tr>
              <th className="px-6 py-3">Product</th>
              <th className="px-6 py-3">Quantity</th>
              <th className="px-6 py-3">Minimum Required</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {stockItems.map((item) => {
              const isLowStock = item.quantity < item.threshold;
              return (
                <tr key={item.id}>
                  <td className="px-6 py-4 font-medium">{item.name}</td>
                  <td className="px-6 py-4">{item.quantity}</td>
                  <td className="px-6 py-4">{item.threshold}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                        isLowStock
                          ? 'bg-red-100 text-red-600'
                          : 'bg-green-100 text-green-700'
                      }`}
                    >
                      {isLowStock ? 'Low Stock' : 'In Stock'}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Add Stock Form */}
      <div
        id="add-stock-form"
        className="bg-white p-6 rounded-2xl shadow max-w-xl space-y-4"
      >
        <h2 className="text-xl font-semibold text-gray-700">Add New Stock Item</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Product Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
              placeholder="e.g. Linen Pants"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
              placeholder="e.g. 50"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Minimum Required</label>
            <input
              type="number"
              name="threshold"
              value={form.threshold}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
              placeholder="e.g. 20"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
          >
            Add Stock
          </button>
        </form>
      </div>
    </div>
  );
};

export default Stocks;