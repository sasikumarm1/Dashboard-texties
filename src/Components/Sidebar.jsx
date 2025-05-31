import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const linkClass = ({ isActive }) =>
    `px-5 py-5 border-x-4 border border-indigo-600 rounded hover:bg-blue-100 transition ${
      isActive ? 'bg-blue-500 text-white' : 'text-gray-800'
    }`;

  return (
    <div className="">
      {/* <h2 className="text-2xl font-bold text-blue-600 mb-6">Textile Admin</h2> */}
      <nav className="space-y-1 grid grid-cols-1 gap-2 w-64 h- bg-gray-300 p-4  shadow-md rounded-lg text-1xl h-screen absolute top-20 left-0">
        <NavLink to="/" className={linkClass}>Dashboard</NavLink>
        <NavLink to="/upload-products" className={linkClass}>Upload Products</NavLink>
        <NavLink to="/orders" className={linkClass}>Orders</NavLink>
        <NavLink to="/delivery-tracking" className={linkClass}>Delivery Tracking</NavLink>
        <NavLink to="/stocks" className={linkClass}>Stocks</NavLink>
        <NavLink to="/expense" className={linkClass}>Expense</NavLink>
        <NavLink to="/reviews-ratings" className={linkClass}>Reviews & Ratings</NavLink>
        <NavLink to="/advertisement" className={linkClass}>Advertisement</NavLink>
        <div className="border-t border-gray-200 my-4">
        <NavLink to="/logout" className={linkClass}>Log Out</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;

