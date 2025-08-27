import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-blue-900 text-white py-12">
      {/* Background star/angle pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <polygon
            points="0,0 100,0 50,100"
            stroke="white"
            strokeWidth="0.5"
            fill="none"
          />
          <polygon
            points="100,0 200,0 150,100"
            stroke="white"
            strokeWidth="0.5"
            fill="none"
          />
          {/* Add more polygons to match pattern */}
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left section */}
        <div>
          <h1 className="text-2xl font-bold mb-2">Barya HR</h1>
          <p className="mb-4">
            Empowering physicians with advanced multi-modal tools to improve treatment selection and patient outcomes.
          </p>
          <div className="flex space-x-4 mb-4">
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="border border-white px-4 py-2 text-sm hover:bg-white hover:text-blue-900 transition"
          >
            ↑ Back to Top
          </button>
        </div>

        {/* Middle: Site Map */}
        <div>
          <h2 className="font-semibold mb-2">Site Map</h2>
          <ul className="space-y-1">
            <li><Link to="/" className="hover:underline">Homepage</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/services" className="hover:underline">Services</Link></li>
            <li><Link to="/careers" className="hover:underline">Careers</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            <li><Link to="/" className="hover:underline">Portal</Link></li>
          </ul>
        </div>

        {/* Right: Legal */}
        <div>
          <h2 className="font-semibold mb-2">Legal</h2>
          <ul className="space-y-1">
            <li><Link to="/" className="hover:underline">Privacy Policy</Link></li>
            <li><Link to="/" className="hover:underline">Terms of Services</Link></li>
            <li><Link to="/" className="hover:underline">Lawyer’s Corner</Link></li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center border-t border-yellow-600 pt-4 text-yellow-300 text-sm">
        © {new Date().getFullYear()} Barya HR Services. All Rights Reserved.
      </div>
    </footer>
  );
}
