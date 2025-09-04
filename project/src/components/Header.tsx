import React, { useState } from 'react';
import { Menu, X, ShoppingBag, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white  border-black  border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
              {/* <span className="text-black font-bold text-xl">K</span> */}
            </div>
            <h1 className="text-2xl font-bold text-gray-900 font-montez">Kunafa World</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 bg-yellow-400 px-4 py-4 rounded-full ml-64 ">
            <a href="#home" className="  text-black font-playfair hover:text-yellow-500 font-medium transition-colors">Home</a>
            <a href="#services" className="text-black font-playfair hover:text-yellow-500 font-medium transition-colors">Services</a>
            <a href="#menu" className="text-black font-playfair hover:text-yellow-500 font-medium transition-colors">Menu</a>
            <a href="#about" className="text-black font-playfair hover:text-yellow-500 font-medium transition-colors">About</a>
            <a href="#contact" className="text-black font-playfair hover:text-yellow-500 font-medium transition-colors">Contact</a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-yellow-400 text-black px-6 py-2 rounded-full hover:bg-yellow-500 transition-colors flex items-center space-x-2">
              <ShoppingBag size={18} />
              <span>Order Now</span>
            </button>
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors flex items-center space-x-2">
              <Phone size={18} />
              <span>Call Us</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-yellow-500 font-medium">Home</a>
              <a href="#services" className="text-gray-700 hover:text-yellow-500 font-medium">Services</a>
              <a href="#menu" className="text-gray-700 hover:text-yellow-500 font-medium">Menu</a>
              <a href="#about" className="text-gray-700 hover:text-yellow-500 font-medium">About</a>
              <a href="#contact" className="text-gray-700 hover:text-yellow-500 font-medium">Contact</a>
              <div className="flex flex-col space-y-2 pt-4">
                <button className="bg-yellow-400 text-black px-6 py-2 rounded-full hover:bg-yellow-500 transition-colors">
                  Order Now
                </button>
                <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
                  Call Us
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;