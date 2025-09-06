import React, { useState } from "react";
import { Menu, X, ShoppingBag, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-orange-200 sticky top-0 z-50 shadow-md">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center py-1 lg:py-4 md:py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <a href="/" className="flex items-center">
              <img
                src="/images/logo.png"
                alt="Cheese cake World Logo"
                className="md:w-48 md:h-20 lg:w-48 lg:h-20 w-24 h-24 rounded-full object-cover pb-2"
              />
            </a>
          </div>

          {/* Desktop Navigation + Actions */}
          <div className="hidden md:flex items-center space-x-8 ml-auto">
            {/* Navigation */}
            <nav className="flex space-x-8 bg-amber-800 px-6 py-3 rounded-full shadow-lg">
              <a
                href="#home"
                className="text-white font-playfair hover:text-yellow-300 font-medium transition-colors"
              >
                Home
              </a>
              <a
                href="#services"
                className="text-white font-playfair hover:text-yellow-300 font-medium transition-colors"
              >
                Services
              </a>
              <a
                href="#menu"
                className="text-white font-playfair hover:text-yellow-300 font-medium transition-colors"
              >
                Menu
              </a>
              <a
                href="#about"
                className="text-white font-playfair hover:text-yellow-300 font-medium transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-white font-playfair hover:text-yellow-300 font-medium transition-colors"
              >
                Contact
              </a>
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <button className="bg-yellow-400 text-amber-900 px-6 py-2 rounded-full hover:bg-yellow-500 transition-colors flex items-center space-x-2 shadow-md">
                <ShoppingBag size={18} />
                <span>Order Now</span>
              </button>
              <button className="bg-amber-800 text-white px-6 py-2 rounded-full hover:bg-amber-900 transition-colors flex items-center space-x-2 shadow-md">
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
  <div className="md:hidden absolute top-full left-0 w-full bg-orange-200 shadow-md z-40">
    <div className="flex flex-col space-y-4 px-4 py-6">
      <a
        href="#home"
        className="text-amber-900 hover:text-yellow-500 font-medium"
      >
        Home
      </a>
      <a
        href="#services"
        className="text-amber-900 hover:text-yellow-500 font-medium"
      >
        Services
      </a>
      <a
        href="#menu"
        className="text-amber-900 hover:text-yellow-500 font-medium"
      >
        Menu
      </a>
      <a
        href="#about"
        className="text-amber-900 hover:text-yellow-500 font-medium"
      >
        About
      </a>
      <a
        href="#contact"
        className="text-amber-900 hover:text-yellow-500 font-medium"
      >
        Contact
      </a>

      <div className="flex flex-col space-y-2 pt-4">
      <a 
  href="#ourmenu" 
  className="bg-yellow-400 text-amber-900 px-6 py-2 rounded-full hover:bg-yellow-500 transition-colors shadow-md"
>
  Order Now
</a>

        <button className="bg-amber-800 text-white px-6 py-2 rounded-full hover:bg-amber-900 transition-colors shadow-md">
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
