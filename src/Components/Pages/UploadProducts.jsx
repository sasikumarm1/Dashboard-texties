import React, { useState } from 'react';

const UploadProducts = () => {
  const [showForm, setShowForm] = useState(false);
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: '',
    category: '',
    price: '',
  });

  const toggleForm = () => setShowForm(!showForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts([...products, { ...form, id: products.length + 1 }]);
    setForm({ name: '', category: '', price: '' });
    setShowForm(false);
  };

  const exampleProducts = [
    { id: 1, name: 'Cotton Shirt', category: 'Clothing', price: '499' },
    { id: 2, name: 'Silk Saree', category: 'Traditional', price: '1499' },
    { id: 3, name: 'Denim Jeans', category: 'Casual Wear', price: '899' },
  ];

  return (
    <div className="space-y-6 p-6 bg-gray-200 min-h-screen w-10/12 ml-auto rounded-xl shadow-lg text-gray-800">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Upload Products</h1>
        <button
          onClick={toggleForm}
          className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
        >
          {showForm ? 'Cancel' : '+ Add Product'}
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow space-y-4 max-w-xl"
        >
          <div>
            <label className="block font-medium mb-1">Product Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Category</label>
            <input
              type="text"
              name="category"
              value={form.category}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Price (₹)</label>
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
          >
            Upload Product
          </button>
        </form>
      )}

      {/* Uploaded Products Table */}
      <div>
        <h2 className="text-xl font-semibold mb-2 text-gray-700">Uploaded Products</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-xl shadow overflow-hidden">
            <thead className="bg-gray-100 text-gray-600 text-sm font-semibold">
              <tr>
                <th className="px-4 py-3 text-left">Product Name</th>
                <th className="px-4 py-3 text-left">Category</th>
                <th className="px-4 py-3 text-left">Price (₹)</th>
              </tr>
            </thead>
            <tbody>
              {exampleProducts.map((product) => (
                <tr key={product.id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-3">{product.name}</td>
                  <td className="px-4 py-3">{product.category}</td>
                  <td className="px-4 py-3 text-blue-600 font-medium">₹ {product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </div>
    
  );
};

export default UploadProducts;