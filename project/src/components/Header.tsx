import React, { useState } from 'react';
import { Menu, X, ShoppingBag, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-orange-300   sticky top-0 z-50 py-0">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center py-4">
         {/* Logo */}
<div className="flex items-center space-x-2">
  <a href="/" className="flex items-center">
    <img
      src="/images/logo.png"
      alt="Kunafa World Logo"
      className="w-48 h-20 rounded-full object-cover"
    />
  </a>
</div>


          {/* Desktop Navigation + Actions */}
          <div className="hidden md:flex items-center space-x-8 ml-auto  ">
            {/* Navigation */}
            <nav className="flex space-x-8 bg-black px-6 py-3 rounded-full">
              <a href="#home" className="text-white font-playfair hover:text-yellow-500 font-medium transition-colors">Home</a>
              <a href="#services" className="text-white font-playfair hover:text-yellow-500 font-medium transition-colors">Services</a>
              <a href="#menu" className="text-white font-playfair hover:text-yellow-500 font-medium transition-colors">Menu</a>
              <a href="#about" className="text-white font-playfair hover:text-yellow-500 font-medium transition-colors">About</a>
              <a href="#contact" className="text-white font-playfair hover:text-yellow-500 font-medium transition-colors">Contact</a>
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <button className="bg-black text-black px-6 py-2 rounded-full hover:bg-yellow-500 transition-colors flex items-center space-x-2">
                <ShoppingBag size={18} className='text-white'/>
                <span className='text-white'>Order Now</span>
              </button>
              <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors flex items-center space-x-2">
                <Phone size={18} />
                <span>Call Us</span>
              </button>
            </div>
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
