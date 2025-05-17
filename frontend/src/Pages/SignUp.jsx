import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../Services/user";

const SignUp = () => {
  const [inputData, setInputData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await registerUser(inputData);
      if (data.success) {
        setInputData({ username: "", email: "", password: "" });
        navigate("/login");
      }
    } catch (error) {
      console.log("Error registering user", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-pink-50 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg shadow-pink-200 w-full max-w-md">
        <h1 className="text-center text-4xl font-extrabold text-pink-700 mb-6">
          Create an Account
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          {["username", "email", "password"].map((field) => (
            <div key={field}>
              <label
                htmlFor={field}
                className="block text-gray-700 mb-1 capitalize"
              >
                {field}
              </label>
              <input
                type={field === "password" ? "password" : field}
                name={field}
                value={inputData[field]}
                onChange={handleInputChange}
                placeholder={`Enter your ${field}`}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full py-3 bg-pink-600 text-white text-lg rounded-lg hover:bg-pink-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-pink-600 font-medium hover:underline"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
