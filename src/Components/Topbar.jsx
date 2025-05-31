import React from 'react';

const Topbar = () => {
  return (
    <header className="bg-neutral-300 shadow flex items-center justify-between px-4 py-2 ">
      <h2 className="text-2xl font-serif text-blue-600  ">Textile Admin</h2>
      <input
        type="text"
        placeholder="Search..."
        className="border border-gray-300 rounded px-4 py-1 w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 w-60 max-w-md bg-white"
      />
      <div className="grid grid-cols-1 gap-4 bg-gray-400 p-4 rounded-lg shadow-md w-50 h-15 items-center justify-between">
      <div className="flex items-center space-x-3 text-1xl">
        <img
          src="https://via.placeholder.com/40"
          alt="Admin Avatar"
          className="rounded-full w-10 h-10"
        />
        <button className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700 transition w-24 items-center justify-between">
          Login
        </button>
      </div>
        </div>
    </header>
  );
};

export default Topbar;
