import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Mail, Facebook, Linkedin } from "lucide-react";
import BaryaLogo from "../image/blogo.png"; // Ensure you have a logo image in the specified path

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="shadow-md w-full fixed top-0 left-0 z-50">
      {/* 🔹 Top Bar */}
      <div className="bg-blue-900 text-sm text-white px-6 py-2 hidden md:flex justify-between items-center">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <Phone size={16} /> +91 - 9990316499
          </span>
          <span className="flex items-center gap-2">
            <Mail size={16} /> info@baryahr.com
          </span>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex gap-3">
            <a href="#" target="_blank" className="hover:text-blue-400">
              <Facebook size={18} />
            </a>
            <a href="#" target="_blank" className="hover:text-blue-400">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* 🔹 Main Navbar */}
      <nav className="bg-white px-6 py-4 flex justify-between items-center relative">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={BaryaLogo} alt="Barya HR Logo" className="h-12 w-12 object-contain" />
          <h1 className="text-2xl font-bold text-blue-900">Barya HR Services</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center text-lg text-gray-700">
          <Link to="/" className="hover:text-blue-900">Home</Link>
          <Link to="/about" className="hover:text-blue-900">About Us</Link>
          <Link to="/services" className="hover:text-blue-900">Services</Link>
          <Link to="/careers" className="hover:text-blue-900">Careers</Link>
          <Link to="/contact" className="hover:text-blue-900">Contact Us</Link>
          <Link
            to="/apply"
            className="ml-4 border-2 border-blue-900 text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-blue-900 hover:text-white transition"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={28} />
        </button>

        {/* 🔹 Sidebar Mobile Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Close Button */}
          <div className="flex justify-between items-center px-6 py-4 border-b">
            <h2 className="text-lg font-semibold text-blue-900">Menu</h2>
            <button onClick={() => setMenuOpen(false)}>
              <X size={28} />
            </button>
          </div>

          {/* Menu Links */}
          <div className="flex flex-col gap-6 px-6 py-6 text-gray-700 text-lg">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
            <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link to="/careers" onClick={() => setMenuOpen(false)}>Careers</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
            <Link
              to="/apply"
              className="border-2 border-blue-900 text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-blue-900 hover:text-white transition text-center"
              onClick={() => setMenuOpen(false)}
            >
              Apply Now
            </Link>
          </div>
        </div>

        {/* 🔹 Overlay when menu open */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setMenuOpen(false)}
          ></div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
