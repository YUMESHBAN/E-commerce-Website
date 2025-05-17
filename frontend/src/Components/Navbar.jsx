import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { GrCart } from "react-icons/gr";
import { UserAuthContext } from "../Context/AuthContext/userAuth";
import { ShopContext } from "../Context/ShopContext/ShopContext";
import { adminAuthContext } from "../Context/AuthContext/adminAuth";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const { itemsNumber } = useContext(ShopContext);
  const { user, logOutHost } = useContext(UserAuthContext);
  const { admin, logout } = useContext(adminAuthContext);

  return (
    <header className="sticky shadow top-0 z-50">
      <nav className="bg-white border-b border-rose-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo and Brand Name */}
          <div className="flex items-center">
            <Link to="/" alt="Logo">
              <img
                className="mr-3 h-16"
                src={logo}
                alt="Rupali Beauty Point Logo"
              />
            </Link>
            <Link
              to="/"
              className="ml-4 text-2xl font-bold text-rose-600 hover:text-rose-800"
            >
              Rupali Beauty Point
            </Link>
          </div>

          {/* Auth and Cart Buttons */}
          <div className="flex items-center lg:order-2">
            {!user && !admin ? (
              <Link
                to="/login"
                className="text-rose-600 hover:bg-rose-100 focus:ring-4 focus:ring-rose-200 font-medium rounded-lg text-sm px-4 py-2 mr-2"
              >
                Log In
              </Link>
            ) : (
              <button
                className="text-rose-600 hover:bg-rose-100 font-medium rounded-lg text-sm px-4 py-2 mr-2"
                onClick={admin ? logout : logOutHost}
              >
                Logout
              </button>
            )}

            <Link
              to="/signup"
              className="text-rose-600 hover:bg-rose-100 font-medium rounded-lg text-sm px-4 py-2 mr-2"
            >
              Sign Up
            </Link>

            <Link to="/cart" className="relative">
              <div className="relative flex items-center justify-center p-2 shadow hover:shadow-md rounded-full transition-all">
                <GrCart className="h-6 w-6 text-rose-500 hover:text-rose-700 transition-all" />
                <span className="absolute top-[-5px] right-[-5px] bg-rose-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">
                  {!user ? "0" : `${itemsNumber}`}
                </span>
              </div>
            </Link>
          </div>

          {/* Nav Links */}
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {["/", "/contact", "/about", "/faq"].map((path, idx) => {
                const labels = ["Home", "Contact", "About", "FAQ"];
                return (
                  <li key={idx}>
                    <NavLink
                      to={path}
                      className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 border-b ${
                          isActive ? "text-rose-700" : "text-gray-700"
                        } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-rose-700 lg:p-0`
                      }
                    >
                      {labels[idx]}
                    </NavLink>
                  </li>
                );
              })}
              {admin && (
                <li>
                  <NavLink
                    to="/admin"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b ${
                        isActive ? "text-rose-700" : "text-gray-700"
                      } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-rose-700 lg:p-0`
                    }
                  >
                    Admin Panel
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
