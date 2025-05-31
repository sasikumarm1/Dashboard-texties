import React, { useState } from 'react';

const Advertisement = () => {
  const [ads, setAds] = useState([
    {
      id: 1,
      title: 'Summer Sale 50% Off',
      description: 'Enjoy half price on all summer collection items.',
      date: '2025-05-20',
    },
    {
      id: 2,
      title: 'New Arrival: Linen Collection',
      description: 'Checkout our fresh 2025 linen designs.',
      date: '2025-05-10',
    },
  ]);

  const [form, setForm] = useState({
    title: '',
    description: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAd = {
      id: ads.length + 1,
      ...form,
    };
    setAds([newAd, ...ads]);
    setForm({ title: '', description: '', date: '' });
  };

  return (
    <div className="space-y-6 p-6 bg-gray-200 min-h-screen w-10/12 ml-auto rounded-xl shadow-lg text-gray-800 ">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Advertisements</h1>
          <p className="text-gray-500">Manage promotional campaigns</p>
        </div>
        
      </div>

      {/* Advertisement List */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {ads.map((ad) => (
          <div key={ad.id} className="bg-white p-5 rounded-xl shadow space-y-2">
            <h2 className="text-xl font-bold text-gray-800">{ad.title}</h2>
            <p className="text-gray-600">{ad.description}</p>
            <p className="text-sm text-gray-400">Date: {ad.date}</p>
          </div>
        ))}
      </div>

      {/* Add Advertisement Form */}
      <div
        id="ad-form"
        className="bg-white p-6 rounded-2xl shadow max-w-xl space-y-4"
      >
        <h2 className="text-xl font-semibold text-gray-700">Add New Advertisement</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
              placeholder="e.g. Diwali Special Offer"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
              placeholder="Enter a short promotion description"
              rows={3}
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Date</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
          >
            Add Advertisement
          </button>
        </form>
      </div>
    </div>
  );
};

export default Advertisement;