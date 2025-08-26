import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Mail, Facebook, Linkedin } from "lucide-react";

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


        <div className="flex items-center gap-6 mt-2 md:mt-0">
          {/* <Link to="/students" className="hover:underline">For S</Link>
          <Link to="/mentors" className="hover:underline">For Mentors</Link>
          <Link to="/institutions" className="hover:underline">For Institutions</Link> */}
          <div className="flex gap-3">
            <a href="#" target="_blank" className="hover:text-blue-700">
              <Facebook size={18} />
            </a>
            <a href="#" target="_blank" className="hover:text-blue-700">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* 🔹 Main Navbar */}
      <nav className="bg-white px-6 py-4 flex justify-between items-center relative">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-900">Barya HR</h1>

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
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-6 z-50">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
            <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link to="/careers" onClick={() => setMenuOpen(false)}>Careers</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
            <Link
              to="/apply"
              className="border-2 border-blue-900 text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-blue-900 hover:text-white transition"
              onClick={() => setMenuOpen(false)}
            >
              Apply Now
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
