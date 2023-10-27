// Import React and necessary dependencies
import React, { useState } from 'react';

// Navbar component
const Navbar2 = () => {
  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className=" w-full py-4 font-roboto-slab text-white sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className=" font-bold text-xl ">Face Tea</div>
          <div className="hidden md:flex space-x-4  flex-1 ">
            <div className='flex mx-auto space-x-6 pr-20'>
            <a href="#menu" className="hover:text-gray-500">Menu</a>
            <a href="#reviews" className="hover:text-gray-500 ">Reviews</a>
            <a href="#contact" className="hover:text-gray-500">Contact</a>
            <div className="relative group">
              <button className="hover:text-gray-500">Locations</button>
              <div className="absolute left-0 mt-2 p-2  rounded shadow-lg opacity-0 group-hover:opacity-100 w-max">
                <a href="#location1" className="block hover:text-gray-500">Lake Mary</a>
                <hr className='opacity-20'></hr>
                <a href="#location2" className="block hover:text-gray-500">Orange City </a>
              </div>
            </div>
          </div>
          <button className="md:hidden text-white" onClick={toggleMobileMenu}>
            <i className="fas fa-bars">word</i>
          </button>
          </div>
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

export default Navbar2;
