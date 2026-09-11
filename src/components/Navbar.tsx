import React, { useState } from "react";

import logoImg from "../assets/logo-text.png";
import hamburgerIcon from "../assets/hamburger.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="hidden md:flex h-16 items-center justify-between">
      
          <a href="#home" className="flex items-center">
            <img
              src={logoImg}
              alt="Dev Stack Logo"
              className="h-8 sm:h-9 w-auto object-contain"
            />
          </a>

     
          <div className="flex items-center gap-6 text-sm font-medium text-gray-600">
            <a
              href="#home"
              className="hover:text-pink-600 transition-colors"
            >
              Home
            </a>

            <a
              href="#technologies"
              className="hover:text-pink-600 transition-colors"
            >
              Technologies
            </a>

            <a
              href="#projects"
              className="hover:text-pink-600 transition-colors"
            >
              Projects
            </a>

            <a
              href="#about"
              className="hover:text-pink-600 transition-colors"
            >
              About
            </a>

            <a
              href="#contact"
              className="hover:text-pink-600 transition-colors"
            >
              Contact
            </a>
          </div>

         
          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
              Sign In
            </button>

            <button className="bg-(--brand-gradient) hover:opacity-90 text-white px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-sm">
              Sign Up
            </button>
          </div>
        </div>

       
        <div className="md:hidden h-16 grid grid-cols-3 items-center">
          <div className="flex justify-start">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="p-1 focus:outline-none"
            >
              <img
                src={hamburgerIcon}
                alt="Menu"
                className="h-6 w-6 object-contain"
              />
            </button>
          </div>

          <div className="flex justify-center">
            <a href="#home" onClick={closeMenu}>
              <img
                src={logoImg}
                alt="Dev Stack Logo"
                className="h-8 w-auto object-contain"
              />
            </a>
          </div>

          <div className="flex justify-end items-center gap-2">
            <button className="text-gray-600 hover:text-gray-900 text-[11px] font-medium">
              Sign In
            </button>

         
            <button className="bg-(--brand-gradient) hover:opacity-90 text-white px-3 py-1.5 rounded-full text-[11px] font-medium transition-all duration-300">
              Sign Up
            </button>
          </div>
        </div>

       
        {isOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <div className="flex flex-col gap-3 text-sm font-medium text-gray-600">
              <a
                href="#home"
                onClick={closeMenu}
                className="hover:text-pink-600 transition-colors"
              >
                Home
              </a>

              <a
                href="#technologies"
                onClick={closeMenu}
                className="hover:text-pink-600 transition-colors"
              >
                Technologies
              </a>

              <a
                href="#projects"
                onClick={closeMenu}
                className="hover:text-pink-600 transition-colors"
              >
                Projects
              </a>

              <a
                href="#about"
                onClick={closeMenu}
                className="hover:text-pink-600 transition-colors"
              >
                About
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="hover:text-pink-600 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;