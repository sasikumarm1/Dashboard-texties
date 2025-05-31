import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear auth data (localStorage, cookies, etc.)
    localStorage.removeItem('authToken'); // Adjust key based on your setup

    // Redirect after short delay
    const timeout = setTimeout(() => {
      navigate('/login');
    }, 1500);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="space-y-6 p-6 bg-gray-200 min-h-screen w-10/12 ml-auto rounded-xl shadow-lg text-gray-800">
      <div className="text-center space-y-4">
        <div className="text-4xl font-bold text-gray-700">Logging Out...</div>
        <p className="text-gray-500">You will be redirected shortly.</p>
        <div className="w-16 h-16 mx-auto border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Logout;