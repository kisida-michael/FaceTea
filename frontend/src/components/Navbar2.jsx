// Import React and necessary dependencies
import React, { useState, useEffect } from 'react';
import { useNavbarContext } from '../utils/NavbarContext';
// Navbar component
const Navbar2 = () => {
  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { navbarBackground, changeNavbarBackground } = useNavbarContext();

  useEffect(() => {
    const headerHeight = document.querySelector('header').offsetHeight;

    const handleScroll = () => {
      changeNavbarBackground(headerHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [changeNavbarBackground]);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ${navbarBackground}`}>
    <nav className=" w-full py-4 font-roboto-slab text-white">
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
                <a href="/lake-mary" className="block text-gray-700">Lake Mary</a>
                <a href="/orange-city" className="block text-gray-700">Orange City </a>
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
                <a href="/lake-mary" className="block text-gray-700">Lake Mary</a>
                <a href="/orange-city" className="block text-gray-700">Orange City</a>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
    </div>
  );
};

export default Navbar2;
