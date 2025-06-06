import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { adminLogin } from "../Services/user";
import { adminAuthContext } from "../Context/AuthContext/adminAuth";
import { useContext } from "react";
const LogIn = () => {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
    role: "admin",
  });

  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();
  const { setAdmin } = useContext(adminAuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(inputData, setAdmin);
      const data = await adminLogin(inputData, setAdmin);
      if (data.success) navigate("/");

      //console.log(data);
    } catch (error) {
      console.error("An error occurred");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-6 rounded-lg shadow-lg shadow-gray-500 w-[90%] flex flex-col sm:w-[600px] bg-gray-200 gap-3 backdrop-blur-sm">
        <h2 className="text-center text-4xl font-bold text-gray-800 py-4">
          Log In for admin
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <div className="">
              Email:
              <input
                onChange={handleChange}
                type="email"
                name="email"
                value={inputData.email}
                required
                placeholder="ram@gmail.com"
                className="mt-2 w-full p-2 border border-gray-300 shadow-2xl"
              />
            </div>
            <div>
              Password:
              <input
                onChange={handleChange}
                type="password"
                name="password"
                value={inputData.password}
                required
                placeholder="ram12345677"
                className="mt-2 w-full p-2 border border-gray-300 shadow-2xl"
              />
            </div>

            <div className="flex w-full justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600"
              >
                Log In
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
