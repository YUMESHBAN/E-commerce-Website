import React, { useState } from "react";
import AdminLogin from "./AdminLogin";
import UserLogin from "./UserLogin";

const LogIn = () => {
  const [role, setRole] = useState(null);

  const handleRoleSelection = (selectedRole) => {
    setRole(selectedRole);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-extrabold text-pink-800 mb-8">
        Choose Your Role
      </h1>

      <div className="flex gap-6 mb-10">
        <button
          onClick={() => handleRoleSelection("user")}
          className="px-6 py-3 bg-white text-pink-700 border-2 border-pink-400 rounded-xl hover:bg-pink-50 hover:border-pink-600 transition font-semibold shadow-md"
        >
          Login as User
        </button>
        <button
          onClick={() => handleRoleSelection("admin")}
          className="px-6 py-3 bg-white text-purple-700 border-2 border-purple-400 rounded-xl hover:bg-purple-50 hover:border-purple-600 transition font-semibold shadow-md"
        >
          Login as Admin
        </button>
      </div>

      <div className="w-full max-w-lg">
        {role === "admin" ? <AdminLogin /> : role === "user" && <UserLogin />}
      </div>
    </div>
  );
};

export default LogIn;
