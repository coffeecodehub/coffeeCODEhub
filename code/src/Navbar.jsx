import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from "./assets/logo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
    { name: 'Feedback', path: '/feedback' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b shadow-sm">
      
      <div className="max-w-[1400px] mx-auto px-3 sm:px-4 lg:px-5 py-3 flex items-center">
<Link to="/" className="flex items-center gap-2">

  <img
    src={logo}
    alt="Logo"
    className="w-10 h-10 object-contain -mt-1"
  />

  <h2 className="text-xl font-bold text-gray-900 leading-none">
    coffee<span className="text-[#F59E0B]">CODE</span>Hub
  </h2>

</Link>

        {/* Nav Links + Button RIGHT SIDE */}
        <div className="ml-auto hidden md:flex items-center gap-6 text-[15px] font-medium">
          
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors ${
                location.pathname === link.path
                  ? 'text-[#F59E0B]'
                  : 'text-gray-700 hover:text-[#F59E0B]'
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Button */}
          <Link
            to="/contact"
            className="ml-2 bg-[#F59E0B] text-black font-semibold px-5 py-2 rounded-full hover:bg-amber-400 transition-all text-sm"
          >
            Start Project
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-gray-700 ml-auto"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

      </div>
    </nav>
  );
};

export default Navbar;