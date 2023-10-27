// Import React and necessary dependencies
import React, { useState } from 'react';

// Navbar component
const Navbar = () => {
  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-primary w-full py-4 font-roboto-slab top-0 sticky z-50 bg-opacity-70">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold text-xl ">Face Tea</div>
          <div className="hidden md:flex space-x-4 text-white hover:text-blue-600">
            <a href="#menu" className="text-white">Menu</a>
            <a href="#reviews" className="text-white ">Reviews</a>
            <a href="#contact" className="text-white">Contact</a>
            <div className="relative group">
              <button className="text-white">Locations</button>
              <div className="absolute left-0 mt-2 bg-white p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 w-max">
                <a href="#location1" className="block text-gray-700">Lake Mary</a>
                <a href="#location2" className="block text-gray-700">Orange City </a>
              </div>
            </div>
          </div>
          <button className="md:hidden text-white" onClick={toggleMobileMenu}>
            <i className="fas fa-bars">word</i>
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4">
            <a href="#menu" className="block text-white mb-2">Menu</a>
            <a href="#reviews" className="block text-white mb-2">Reviews</a>
            <a href="#contact" className="block text-white mb-2">Contact</a>
            <button className="block text-white mb-2" onClick={() => setIsMobileMenuOpen(false)}>
              Locations
            </button>
            {isMobileMenuOpen && (
              <div className="mt-2 bg-white p-2 rounded shadow-lg">
                <a href="#location1" className="block text-gray-700">Location 1</a>
                <a href="#location2" className="block text-gray-700">Location 2</a>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
