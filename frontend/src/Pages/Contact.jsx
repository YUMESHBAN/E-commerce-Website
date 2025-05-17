import React from "react";
import form from "../assets/form.jpg"; // Side image
import bottom from "../assets/bottom.jpg"; // Your new horizontal image

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 via-rose-50 to-amber-100 flex flex-col items-center justify-start p-6 gap-6">
      {/* Card Section */}
      <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded-2xl overflow-hidden w-full max-w-5xl">
        {/* Side Image */}
        <div className="md:w-1/2 hidden md:block">
          <img
            src={form}
            alt="Contact Visual"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Form */}
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-3xl font-bold text-center text-rose-500 mb-6">
            Contact Us
          </h1>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-300"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-300"
            />
            <button
              type="submit"
              className="bg-rose-500 hover:bg-rose-600 text-white p-3 rounded-xl font-semibold transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Horizontal Image Below */}
    </div>
  );
};

export default Contact;
