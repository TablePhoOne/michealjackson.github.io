import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white py-4 px-8 shadow-md">

      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-white hover:text-gray-400 transition duration-300"
        >
          anton.
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link
            to="/about"
            className="hover:text-gray-400 transition duration-300"
          >
            Life
          </Link>
          <Link
            to="/services"
            className="hover:text-gray-400 transition duration-300"
          >
            Addiction
          </Link>
          <Link
            to="/contact"
            className="hover:text-gray-400 transition duration-300"
          >
            Death
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
