import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

export default function Footer() {
  return (
    <footer className="bg-rose-50 border-t border-rose-200">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img
                className="mr-3 h-16"
                src={logo}
                alt="Rupali Beauty Point Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-rose-600">
                Rupali Beauty Point
              </span>
            </Link>
          </div>
          <div>
            <ul className="flex flex-wrap justify-center space-x-6">
              <li>
                <Link
                  to="/"
                  className="text-rose-600 hover:text-rose-800 font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-rose-600 hover:text-rose-800 font-medium"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-rose-600 hover:text-rose-800 font-medium"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-rose-600 hover:text-rose-800 font-medium"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-rose-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-rose-500 sm:text-center">
            © {new Date().getFullYear()}{" "}
            <Link to="/" className="hover:underline font-semibold">
              Rupali Beauty Point
            </Link>
            . All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
