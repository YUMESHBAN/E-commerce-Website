import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { logInHost } from "../Services/user";
import { UserAuthContext } from "../Context/AuthContext/userAuth";
import { Link } from "react-router-dom";

const LogIn = () => {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
    role: "user",
  });

  const { setUser } = useContext(UserAuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await logInHost(inputData, setUser);
      if (data.success) navigate("/");
    } catch (error) {
      console.error("An error occurred during login", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-gray-200 p-6 rounded-lg shadow-lg shadow-gray-500 w-[90%] sm:w-[400px] backdrop-blur-md">
        <h1 className="text-center text-4xl font-bold text-gray-800 py-4">
          Log In
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 font-medium text-gray-700">
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={inputData.email}
                onChange={handleChange}
                placeholder="ram@gmail.com"
                className="w-full p-2 border border-pink-300 rounded shadow-md bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="mb-1 font-medium text-gray-700"
              >
                Password:
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={inputData.password}
                onChange={handleChange}
                placeholder="ram12345678"
                className="w-full p-2 border border-pink-300 rounded shadow-md bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div className="flex justify-center gap-4 mt-4">
              <button
                type="submit"
                className="bg-pink-500 text-white py-2 px-6 rounded hover:bg-pink-600"
              >
                Log In
              </button>
            </div>
          </div>
        </form>

        <div>
          <p className="text-center text-gray-600 mt-4">
            Don't have an account?{" "}
            <Link className="text-blue-700" to="/signup">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
