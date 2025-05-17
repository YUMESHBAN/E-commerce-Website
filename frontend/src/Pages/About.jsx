import React from "react";
import aboutImage from "../assets/about.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col sm:flex-row bg-gradient-to-r from-pink-400 via-pink-250 to-white-300 py-12 px-4">
      {/* About section */}
      <div className="flex-1 max-w-xl text-center sm:text-left flex-wrap mb-8 sm:mb-0 sm:mr-8">
        <h1 className="text-5xl text-white font-bold mb-6">About Us</h1>
        <p className="text-white text-lg sm:text-base sm:mt-10 sm:px-4 leading-relaxed tracking-wide">
          Welcome to our journey of excellence! At{" "}
          <strong>Rupali Beauty Point</strong>, we believe that beauty is a
          reflection of confidence and self-care. We are passionate about
          offering high-quality beauty products that empower individuals to look
          and feel their best. From luxurious skincare to vibrant makeup, we
          carefully curate a collection of products that meet the diverse needs
          of our customers. Our mission is to provide an exceptional shopping
          experience, where beauty meets convenience, and every product is
          chosen with love and care. Whether you're enhancing your skincare
          routine or exploring the latest makeup trends, Rupali Beauty Point is
          your trusted partner on your beauty journey. We are committed to
          delivering top-notch customer service and ensuring that your
          experience with us is as radiant as the products we offer.
        </p>
        <button className="mt-6 px-6 py-3 bg-pink-600 text-white rounded-lg text-lg hover:bg-orange-400 transition duration-300 ease-in-out">
          Learn More
        </button>
      </div>

      {/* Image section */}
      <div className="flex-1 max-w-xl">
        <img
          src={aboutImage}
          alt="About Us"
          className="object-cover w-full h-full sm:h-[80%] rounded-3xl shadow-xl shadow-gray-800"
        />
      </div>
    </div>
  );
};

export default About;
