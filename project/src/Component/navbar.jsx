import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "./photos/logo.jpeg"; // replace with your logo
import { Link } from "react-router-dom"; 


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center cursor-pointer">
          <img
            src={logo}
            alt="Logo"
            className="h-20 w-auto object-contain" // Large logo
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-10 text-lg font-semibold text-[#0e3b57]">
          <a href="/" className="hover:text-orange-600 transition duration-300">Services</a>
          <a href="Industries" className="hover:text-orange-600 transition duration-300">Industry</a>
          <a href="Client" className="hover:text-orange-600 transition duration-300">Clients</a>
          <a href="About" className="hover:text-orange-600 transition duration-300">About</a>
          <a href="Contact" className="hover:text-orange-600 transition duration-300">Contact Us</a>
        </nav>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#0e3b57] focus:outline-none text-2xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <nav className="flex flex-col items-start space-y-4 py-6 px-8 text-lg font-medium text-[#0e3b57]">
            <a href="/" className="hover:text-orange-600 transition">Services</a>
            <a href="Industries" className="hover:text-orange-600 transition">Industry</a>
            <a href="Client" className="hover:text-orange-600 transition">Clients</a>
            <a href="About" className="hover:text-orange-600 transition">About</a>
            <a href="Contact" className="hover:text-orange-600 transition">Contact Us</a>
          </nav>
        </div>
      )}
    </header>
  );
}