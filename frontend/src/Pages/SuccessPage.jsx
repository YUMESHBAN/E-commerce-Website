import React from "react";
import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100">
      <div className="bg-white p-10 rounded-2xl shadow-2xl text-center max-w-md">
        <h1 className="text-4xl font-extrabold text-green-600 mb-4">
          Payment Successful!
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          Thank you for your purchase! You'll receive a confirmation email
          shortly.
        </p>
        <Link to="/">
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-2 rounded-lg transition-all">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
