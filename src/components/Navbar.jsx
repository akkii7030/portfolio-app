import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../store/themeSlice"; 
import { FiMenu, FiX } from "react-icons/fi";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const dispatch = useDispatch();

  // Apply theme to the entire page
  useEffect(() => {
    document.body.className = isDarkMode
      ? "bg-gradient-to-br from-gray-900 to-black text-white"
      : "bg-gradient-to-br from-purple-500 via-purple-700 to-purple-900 text-black";
  }, [isDarkMode]);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`p-4 flex justify-between items-center shadow-md transition-all duration-300 ${
          isDarkMode
            ? "bg-gradient-to-r from-gray-900 via-gray-800 to-black"
            : "bg-gradient-to-r from-purple-900 via-purple-700 to-purple-500"
        }`}
      >
        <h1 className="text-xl font-bold text-red-300">Portfolio</h1>

        <div className="hidden md:flex space-x-6">
          <Link className="text-lg font-semibold hover:text-red-400 transition" to="/">
            Home
          </Link>
          <Link className="text-lg font-semibold hover:text-red-400 transition" to="/about">
            About
          </Link>
          <Link className="text-lg font-semibold hover:text-red-400 transition" to="/projects">
            Projects
          </Link>
          <Link className="text-lg font-semibold hover:text-red-400 transition" to="/resume">
            Resume
          </Link>
          <Link className="text-lg font-semibold hover:text-red-400 transition" to="/contact">
            Contact
          </Link>

          {/* Dark Mode Toggle */}
          <button
            className="text-2xl p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-all duration-300"
            onClick={() => dispatch(toggleDarkMode())}
          >
            {isDarkMode ? <BsSunFill className="text-yellow-400" /> : <BsMoonStarsFill className="text-blue-300" />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="text-white text-2xl md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-purple-900 text-white"
        } md:hidden`}
      >
        <button className="absolute top-4 right-4 text-white text-2xl" onClick={() => setIsOpen(false)}>
          <FiX />
        </button>
        <div className="mt-16 flex flex-col space-y-4 px-6">
          <Link className="text-lg font-semibold hover:text-red-400 transition" to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link className="text-lg font-semibold hover:text-red-400 transition" to="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link className="text-lg font-semibold hover:text-red-400 transition" to="/projects" onClick={() => setIsOpen(false)}>
            Projects
          </Link>
          <Link className="text-lg font-semibold hover:text-red-400 transition" to="/resume" onClick={() => setIsOpen(false)}>
            Resume
          </Link>
          <Link className="text-lg font-semibold hover:text-red-400 transition" to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>

          {/* Dark Mode Toggle (in Sidebar) */}
          <button
            className="mt-4 px-4 py-2 flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-lg shadow-md transition"
            onClick={() => dispatch(toggleDarkMode())}
          >
            {isDarkMode ? <BsSunFill className="text-yellow-400 text-2xl" /> : <BsMoonStarsFill className="text-blue-300 text-2xl" />}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
