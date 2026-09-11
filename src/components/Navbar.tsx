import React, { useState } from "react";
import logoImg from "../assets/logo-text.png";
import hamburgerImg from "../assets/hamburger.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Technologies", href: "#technologies" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
        
        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <img
              src={hamburgerImg}
              alt="Menu"
              className="h-6 w-6 object-contain"
            />
          </button>
        </div>

        {/* Brand Logo */}
        <div className="flex items-center absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          <a href="#home" className="flex items-center">
            <img
              src={logoImg}
              alt="Dev Stack Logo"
              className="h-7 w-auto object-contain"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-xs font-medium text-gray-600">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-pink-500 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Sign In / Sign Up */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <a
            href="#signin"
            className="text-xs font-medium text-gray-700 hover:text-pink-500 px-2 sm:px-3 py-2 transition-colors duration-200"
          >
            Sign In
          </a>

          <a
            href="#signup"
            className="gradient-btn text-white px-4 sm:px-5 py-2 rounded-xl text-xs font-semibold hover:opacity-90 transition-all duration-200 shadow-sm"
          >
            Sign Up
          </a>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-xs font-medium text-gray-600 hover:text-pink-500 py-1 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;