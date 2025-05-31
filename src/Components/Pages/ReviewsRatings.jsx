import React, { useState } from 'react';

const ReviewsRatings = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      customer: 'Ali Raza',
      product: 'Linen Shirt',
      rating: 5,
      comment: 'Amazing quality and comfort!',
    },
    {
      id: 2,
      customer: 'Sara Khan',
      product: 'Cotton Kurti',
      rating: 4,
      comment: 'Loved it, but delivery was a bit slow.',
    },
  ]);

  const [form, setForm] = useState({
    customer: '',
    product: '',
    rating: '5',
    comment: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      id: reviews.length + 1,
      ...form,
      rating: parseInt(form.rating),
    };
    setReviews([newReview, ...reviews]);
    setForm({ customer: '', product: '', rating: '5', comment: '' });
  };

  return (
    <div className="space-y-6 p-6 bg-gray-200 min-h-screen w-10/12 ml-auto rounded-xl shadow-lg text-gray-800">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Reviews & Ratings</h1>
          <p className="text-gray-500">View customer feedback and satisfaction scores</p>
        </div>
        {/* <button
          onClick={() =>
            document.getElementById('review-form').scrollIntoView({ behavior: 'smooth' })
          }
          className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition"
        >
          + Add Review
        </button> */}
      </div>

      {/* Review Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-5 rounded-xl shadow space-y-2">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold text-gray-800">{review.customer}</h2>
              <span
                className={`text-sm font-semibold px-3 py-1 rounded-full ${
                  review.rating >= 4
                    ? 'bg-green-100 text-green-800'
                    : review.rating === 3
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {review.rating} ⭐
              </span>
            </div>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Product:</span> {review.product}
            </p>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>

      {/* Add Review Form */}
      <div
        id="review-form"
        className="bg-white p-6 rounded-2xl shadow max-w-xl space-y-4"
      >
        <h2 className="text-xl font-semibold text-gray-700">Add New Review</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Customer Name</label>
            <input
              type="text"
              name="customer"
              value={form.customer}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Product</label>
            <input
              type="text"
              name="product"
              value={form.product}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Rating</label>
            <select
              name="rating"
              value={form.rating}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
              required
            >
              <option value="5">5 - Excellent</option>
              <option value="4">4 - Good</option>
              <option value="3">3 - Average</option>
              <option value="2">2 - Poor</option>
              <option value="1">1 - Very Bad</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">Comment</label>
            <textarea
              name="comment"
              value={form.comment}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
              rows={3}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
          >
            Add Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewsRatings;