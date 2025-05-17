import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const AdminPannel = () => {
  return (
    <div className="flex gap-3 min-h-screen">
      {/* Side menue  left ribbon*/}
      <div className="w-64 flex flex-col bg-gray-200  border-r-1 border-gray-700">
        <h2 className="w-full text-center block border-b-1 whitespace-nowrap p-2 text-md text-gray-800">
          Admin Dashboard{" "}
        </h2>
        <ul>
          <li>
            <NavLink
              to="search"
              className={({ isActive }) =>
                isActive
                  ? "block p-2 bg-blue-500 text-white rounded"
                  : "block p-2 text-gray-700 hover:bg-blue-300 hover:text-white rounded"
              }
            >
              Search
            </NavLink>
          </li>
          <li>
            <NavLink
              to="productManage"
              className={({ isActive }) =>
                isActive
                  ? "block p-2 bg-blue-500 text-white rounded"
                  : "block p-2 text-gray-700 hover:bg-blue-300 hover:text-white rounded"
              }
            >
              Manage Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="addnew"
              className={({ isActive }) =>
                isActive
                  ? "block p-2 bg-blue-500 text-white rounded"
                  : "block p-2 text-gray-700 hover:bg-blue-300 hover:text-white rounded"
              }
            >
              Add New Product
            </NavLink>
          </li>
        </ul>
      </div>
      {/* canvas to for admin function result right bar */}
      <div className="flex-grow bg-white">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPannel;
